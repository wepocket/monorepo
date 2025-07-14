// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/src/Script.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../src/Main.sol";

/*
  Deployer: 0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63
  Deployed to: 0x1c16De0d19Ad8482a2acF5A00366847dDea97221
  Transaction hash: 
*/
// anvil --fork-url "" --chain-id 639
// forge script ./script/Main.sol:MainScript --rpc-url arbitrum --broadcast
contract MainScript is Script {
  function setUp() public {}

  function run() public returns (address) {
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    Main mainContract = new Main();

    vm.stopBroadcast();

    return address(mainContract);
  }
}
