// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/src/Script.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../src/StakingReceiver.sol";

/*
  Deployer: 0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63
  Deployed to: 0x16Ad2fF3Ae8c5527320F44aaE860709e66DE0083
  Transaction hash: 0xde8dd477573e687fa83b864d68135d94ca39ecda98779b213112cdfc579e1591
*/
// anvil --fork-url "" --chain-id 639
// forge script ./script/StakingReceiver.sol:StakingReceiverScript --rpc-url base --broadcast
contract StakingReceiverScript is Script {
  function setUp() public {}

  function run() public returns (address) {
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    StakingReceiver mainContract = new StakingReceiver();

    mainContract.depositGas{ value: 700000000000000 }();

    vm.stopBroadcast();

    return address(mainContract);
  }
}
