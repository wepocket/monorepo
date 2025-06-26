// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts-ccip/contracts/applications/CCIPReceiver.sol";
import "@chainlink/contracts-ccip/contracts/libraries/Client.sol";

contract StakingReceiver is Ownable, CCIPReceiver {
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

    constructor() CCIPReceiver(0x881e3A65B4d4a04dD529061dd0071cf975F58bCD) {}

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal virtual override {
        bytes32 messageId = any2EvmMessage.messageId; // fetch the messageId
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector; // fetch the source chain identifier (aka selector)
        address sender = abi.decode(any2EvmMessage.sender, (address)); // abi-decoding of the sender address
        address depositor = abi.decode(any2EvmMessage.data, (address)); // abi-decoding of the depositor's address

        // Collect tokens transferred. This increases this contract's balance for that Token.
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
}
