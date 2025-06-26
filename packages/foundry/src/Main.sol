// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts-ccip/contracts/applications/CCIPReceiver.sol";
import "@chainlink/contracts-ccip/contracts/libraries/Client.sol";
import "@chainlink/contracts-ccip/contracts/interfaces/IRouterClient.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";


contract Main is Ownable, CCIPReceiver {
    IWETH public immutable weth = IWETH(0x82aF49447D8a07e3bd95BD0d56f35241523fBab1);
    IERC20 public immutable usdt = IERC20(0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9);
    IERC20 public immutable usdc = IERC20(0xaf88d065e77c8cC2239327C5EDb3A432268e5831);
    ISwapRouter private constant uniRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Custom Errors
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    error Main__amountMustBeGreaterThanZero();
    error Main__stakingBalanceMustBeGreaterThanZero();
    error Main__transferFailed();
    error Main__activeStakingPresent();
    error Main__noAllowListedReceiverPresent();
    error Main__notEnoughBalance(uint256, uint256);



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Variables
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    enum StakingType {
        USDC,
        WETH
    }
    address[] public stakers;
    struct StakeInfo {
        uint256 stakedBalance;
        bool hasStaked;
        bool isStaking;
        StakingType stakingType;
    }
    mapping(address user => StakeInfo) public Stakes;
    address public allowListedReceiver = address(0);



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Events
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    event SuccessfulStaked(address indexed user, uint256 amount);
    event SuccessfulUnstake(address indexed user, uint256 amount);
    event MessageSent(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address receiver,
        address depositor,
        Client.EVMTokenAmount tokenAmount,
        uint256 fees
    );


    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Constructor
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    constructor() Ownable(msg.sender) CCIPReceiver(0x141fa059441E0ca23ce184B6A78bafD2A517DdE8) {}



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Public Functions
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    function stakeStables(uint256 _amountToStake) external  returns (uint256 amountOut) {
        if (_amountToStake <= 0) {
            revert Main__amountMustBeGreaterThanZero();
        }

        if (Stakes[msg.sender].isStaking) {
            revert Main__activeStakingPresent();
        }

        if (!Stakes[msg.sender].hasStaked) {
            stakers.push(msg.sender);
        }

        usdt.approve(msg.sender, _amountToStake);
        (bool success) = usdt.transferFrom(msg.sender, address(this), _amountToStake);

        if (!success) {
            revert Main__transferFailed();
        }

        amountOut = swapStableFunds(_amountToStake);

        Stakes[msg.sender].hasStaked = true;
        Stakes[msg.sender].isStaking = true;
        Stakes[msg.sender].stakingType = StakingType.USDC;

        Stakes[msg.sender].stakedBalance += amountOut;
        emit SuccessfulStaked(msg.sender, amountOut);

        amountOut;
    }

    function stakeNative(uint256 _amountToStake) external returns (uint256 amountOut) {
        if (_amountToStake <= 0) {
            revert Main__amountMustBeGreaterThanZero();
        }

        if (Stakes[msg.sender].isStaking) {
            revert Main__activeStakingPresent();
        }

        if (!Stakes[msg.sender].hasStaked) {
            stakers.push(msg.sender);
        }

        weth.approve(msg.sender, _amountToStake);
        (bool success) = weth.transferFrom(msg.sender, address(this), _amountToStake);

        if (!success) {
            revert Main__transferFailed();
        }

        amountOut = swapNativeFunds(_amountToStake);

        Stakes[msg.sender].hasStaked = true;
        Stakes[msg.sender].isStaking = true;
        Stakes[msg.sender].stakingType = StakingType.WETH;
        Stakes[msg.sender].stakedBalance += amountOut;

        emit SuccessfulStaked(msg.sender, amountOut);

        amountOut;
    }

    function _unstake(address _user) private {
        uint256 amountToUnstake = Stakes[_user].stakedBalance;

        if (amountToUnstake <= 0) {
            revert Main__stakingBalanceMustBeGreaterThanZero();
        }

        Stakes[_user].stakedBalance = 0;
        Stakes[_user].isStaking = false;

        emit SuccessfulUnstake(_user, amountToUnstake);

        usdc.transfer(_user, amountToUnstake);
    }

    function unstake() external {
        _unstake(msg.sender);
    }

    function unstakeUserFunds(address _user) external onlyOwner {
        if (Stakes[_user].isStaking) {
            _unstake(_user);
        }
    }

    function stakersCount() external view returns (uint256) {
        return stakers.length;
    }

    function isUserStaking(address _user) external view returns (bool, StakingType, uint256) {
        return (Stakes[_user].isStaking, Stakes[_user].stakingType, Stakes[_user].stakedBalance);
    }

    function swapFunds(
        address tokenIn,
        uint256 amountIn
    ) private returns (uint256 amountOut) {
        IERC20(tokenIn).approve(address(uniRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: tokenIn,
            tokenOut: address(usdc),
            fee: 3000,
            recipient: address(this),
            deadline: block.timestamp,
            amountIn: amountIn,
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0
        });

        amountOut = uniRouter.exactInputSingle(params);
    }

    function swapNativeFunds(
        uint256 amountIn
    ) private returns (uint256 amountOut) {
        amountOut = swapFunds(address(weth), amountIn);
    }

    function swapStableFunds(
        uint256 amountIn
    ) private returns (uint256 amountOut) {
        amountOut = swapFunds(address(usdt), amountIn);
    }

    // TODO: remove when going live, just for testing purposes
    function setAllowListedReceiver(address _receiver) external onlyOwner {
        allowListedReceiver = _receiver;
    }

    function depositToVault(uint256 amount) external onlyOwner {
        require(allowListedReceiver != address(0), "Receiver not set");

        sendMessage(allowListedReceiver, amount);
    }

    function sendMessage(
        address receiver,
        uint256 transferAmount
    ) private returns (bytes32 messageId) {
        address tokenToTransfer = address(usdc);
        uint256 _gasLimit = 100_000;
        uint64 destinationChainSelector = 15971525489660198786;

        Client.EVMTokenAmount memory tokenAmount = Client.EVMTokenAmount({
            token: tokenToTransfer,
            amount: transferAmount
        });

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = tokenAmount;

        address depositor = msg.sender;

        Client.EVM2AnyMessage memory transferCrossUSDC = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(depositor),
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: _gasLimit})
            ),
            feeToken: address(0)
        });

        IRouterClient router = IRouterClient(this.getRouter());

        uint256 fees = router.getFee(destinationChainSelector, transferCrossUSDC);
        if (fees > address(this).balance)
            revert Main__notEnoughBalance(address(this).balance, fees);

        IERC20(tokenToTransfer).approve(address(router), transferAmount);

        messageId = router.ccipSend{value: fees}(destinationChainSelector, transferCrossUSDC);

        emit MessageSent(
            messageId,
            destinationChainSelector,
            receiver,
            depositor,
            tokenAmount,
            fees
        );

        return messageId;
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {}
}

interface ISwapRouter {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    function exactInputSingle(ExactInputSingleParams calldata params) external payable returns (uint256 amountOut);

    struct ExactInputParams {
        bytes path;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
    }

    function exactInput(ExactInputParams calldata params) external payable returns (uint256 amountOut);
}

interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}
