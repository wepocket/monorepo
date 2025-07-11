// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts-ccip/contracts/applications/CCIPReceiver.sol";
import "@chainlink/contracts-ccip/contracts/libraries/Client.sol";


contract StakingReceiver is Ownable, CCIPReceiver {
    IERC20 public immutable usdc = IERC20(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
    IERC4626 public vault;

    event MessageReceived(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender,
        address depositor,
        Client.EVMTokenAmount tokenAmount
    );

    struct MessageIn {
        uint64 sourceChainSelector;
        address sender;
        address depositor;
        address token;
        uint256 amount;
    }

    bytes32[] public receivedMessages;

    mapping(bytes32 => MessageIn) public messageDetail;

    constructor() Ownable(msg.sender) CCIPReceiver(0x881e3A65B4d4a04dD529061dd0071cf975F58bCD) {}

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        bytes32 messageId = any2EvmMessage.messageId;
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector;
        address sender = abi.decode(any2EvmMessage.sender, (address));
        address depositor = abi.decode(any2EvmMessage.data, (address));

        Client.EVMTokenAmount[] memory tokenAmounts = any2EvmMessage
            .destTokenAmounts;
        address token = tokenAmounts[0].token;
        uint256 amount = tokenAmounts[0].amount;

        receivedMessages.push(messageId);
        MessageIn memory detail = MessageIn(
            sourceChainSelector,
            sender,
            depositor,
            token,
            amount
        );
        messageDetail[messageId] = detail;

        emit MessageReceived(
            messageId,
            sourceChainSelector,
            sender,
            depositor,
            tokenAmounts[0]
        );
    }

    function withdrawStables() external onlyOwner {
        uint256 amount = usdc.balanceOf(address(this));

        usdc.transfer(msg.sender, amount);
    }

    function depositGas() external payable onlyOwner() {}

    receive() external payable {}

    // 0x236919F11ff9eA9550A4287696C2FC9e18E6e890
    function setUpVault(address _vault) external onlyOwner {
        vault = IERC4626(_vault);
    }

    function depositVault(uint256 _amount, address _receiver) external {
        vault.deposit(_amount, _receiver);
    }

    function withdrawVault(uint256 _amount, address _receiver) external {
        vault.withdraw(_amount, _receiver, _receiver);
    }
}
