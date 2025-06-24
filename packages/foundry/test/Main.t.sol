// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "@prb/test/src/PRBTest.sol";

import "../src/Main.sol";


// forge test -vvvv
contract MainTest is PRBTest {
    Main private main;
    IWETH private immutable weth = IWETH(0x82aF49447D8a07e3bd95BD0d56f35241523fBab1);
    uint256 private arbFork;

    function setUp() public {
        arbFork = vm.createSelectFork({ urlOrAlias: "https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF" });

        main = new Main();
    }

    function testCanSelectFork() public {
        vm.selectFork(arbFork);

        assertEq(vm.activeFork(), arbFork);
    }

    function testStake() public {
        weth.deposit{ value: 1e18 }();
        weth.approve(address(main), 1e18);

        main.stakeNative(1e18);

        assertEq(main.stakersCount(), 1);
    }
}
