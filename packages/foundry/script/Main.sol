// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/src/Script.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../src/Main.sol";

/*
  Deployer: 0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63
  Deployed to: 0x247D9218f5Cc2086F2A3fB7f4d97fFfBA7f9092f
  Transaction hash: 0x36e02ae1da79c3650b72d4184afe9358537e3c657b47d3a95efcb91282b2c4af
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
