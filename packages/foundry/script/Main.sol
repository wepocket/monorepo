// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.20;

// import {Script} from 'forge-std/Script.sol';
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import { Main } from "../src/Main.sol";

/*
[
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_stakingToken",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "Stakes",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "StakedBalance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "hasStaked",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "isStaking",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "USDT",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "stake",
    "inputs": [
      {
        "name": "_amountToStake",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "stakers",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stakersCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unstake",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SuccessfulStaked",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SuccessfulUnstake",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "Main__TransferFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Main__amountMustBeGreaterThanZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Main__stakingBalanceMustBeGreaterThanZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
]

Deployer: 0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63
Deployed to: 0x15177d1E4BfDE493465170599df4c829D8A0ea17
Transaction hash: 0x3ee41ac8a68acc4f915f5e80dcfd6423c4a20886cdd01d00fd016d99f6c12d76
*/
// // anvil --fork-url https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF --chain-id 639
// // forge create ./src/Main.sol:Main --interactive --constructor-args "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
// forge create ./src/Main.sol:Main --interactive --broadcast --rpc-url "https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF" --constructor-args "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
// contract MainScript is Script {

//   function setUp() public {
//     vm.startBroadcast();
//     IERC20 usdt = IERC20(address("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"));
//     Main mainContract = new Main(address(usdt));
//     vm.stopBroadcast();

//     return mainContract;
//   }

//   function run() public {
//     vm.broadcast();
//   }
// }
