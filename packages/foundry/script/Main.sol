// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.20;

// import {Script} from 'forge-std/Script.sol';
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import { Main } from "../src/Main.sol";

/*
[
  {
    "type": "constructor",
    "inputs": [],
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
    "name": "stakeNative",
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
    "name": "stakeStables",
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
    "name": "unstakeStables",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "usdc",
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
    "name": "usdt",
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
    "name": "weth",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IWETH"
      }
    ],
    "stateMutability": "view"
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
Deployed to: 0x247D9218f5Cc2086F2A3fB7f4d97fFfBA7f9092f
Transaction hash: 0x36e02ae1da79c3650b72d4184afe9358537e3c657b47d3a95efcb91282b2c4af
*/
// // anvil --fork-url https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF --chain-id 639
// forge create ./src/Main.sol:Main --interactive --broadcast --rpc-url "https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF"
// https://base-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF
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
