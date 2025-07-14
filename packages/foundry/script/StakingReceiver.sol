// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/src/Script.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../src/StakingReceiver.sol";

/*
  Deployer: 0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63
  Deployed to: 0xDaF38B256Ab04a8A71dB581154A2C78fFdB286f3
  Transaction hash: 0x970efa597aa45d9ed020a54699c579d31b533a077179a7734050530f09951655
*/
// anvil --fork-url "" --chain-id 639
// forge script ./script/StakingReceiver.sol:StakingReceiverScript --rpc-url base --broadcast
contract StakingReceiverScript is Script {
  function setUp() public {}

  function run() public returns (address) {
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    StakingReceiver mainContract = new StakingReceiver();

    // mainContract.depositGas{ value: 700000000000000 }();

    vm.stopBroadcast();

    return address(mainContract);
  }
}
