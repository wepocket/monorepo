// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Main is Ownable {
    IWETH public immutable weth = IWETH(0x82aF49447D8a07e3bd95BD0d56f35241523fBab1);
    IERC20 public immutable usdt = IERC20(0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9);
    IERC20 public immutable usdc = IERC20(0xaf88d065e77c8cC2239327C5EDb3A432268e5831);
    ISwapRouter private constant uniRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Custom Errors
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    error Main__amountMustBeGreaterThanZero();
    error Main__stakingBalanceMustBeGreaterThanZero();
    error Main__TransferFailed();



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Variables
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    address[] public stakers;
    struct StakeInfo {
        uint256 StakedBalance;
        bool hasStaked;
        bool isStaking;
    }
    mapping(address user => StakeInfo) public Stakes;



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Events
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    event SuccessfulStaked(address indexed user, uint256 amount);
    event SuccessfulUnstake(address indexed user, uint256 amount);



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Constructor
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    constructor() Ownable(msg.sender) {}



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Public Functions
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    function stakeStables(uint256 _amountToStake) public {
        if (_amountToStake <= 0) {
            revert Main__amountMustBeGreaterThanZero();
        }

        if (!Stakes[msg.sender].hasStaked) {
            stakers.push(msg.sender);
        }

        Stakes[msg.sender].StakedBalance += _amountToStake;
        emit SuccessfulStaked(msg.sender, _amountToStake);

        Stakes[msg.sender].hasStaked = true;
        Stakes[msg.sender].isStaking = true;

        usdt.approve(msg.sender, _amountToStake);
        (bool success) = usdt.transferFrom(msg.sender, address(this), _amountToStake);

        if(!success) {
            revert Main__TransferFailed();
        }

        swapStableFunds(_amountToStake);
    }

    function stakeNative(uint256 _amountToStake) public {
        if (_amountToStake <= 0) {
            revert Main__amountMustBeGreaterThanZero();
        }

        if (!Stakes[msg.sender].hasStaked) {
            stakers.push(msg.sender);
        }

        Stakes[msg.sender].StakedBalance += _amountToStake;
        emit SuccessfulStaked(msg.sender, _amountToStake);

        Stakes[msg.sender].hasStaked = true;
        Stakes[msg.sender].isStaking = true;

        weth.approve(msg.sender, _amountToStake);
        (bool success) = weth.transferFrom(msg.sender, address(this), _amountToStake);

        if(!success) {
            revert Main__TransferFailed();
        }

        swapNativeFunds(_amountToStake);
    }

    function unstakeStables() public {
        uint256 amountToUnstake = Stakes[msg.sender].StakedBalance;
        if (amountToUnstake <= 0) {
            revert Main__stakingBalanceMustBeGreaterThanZero();
        }

        Stakes[msg.sender].StakedBalance = 0;

        Stakes[msg.sender].isStaking = false;
        emit SuccessfulUnstake(msg.sender, amountToUnstake);

        usdt.transfer(msg.sender, amountToUnstake);
    }

    function stakersCount() public view returns (uint256) {
        return stakers.length;
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
