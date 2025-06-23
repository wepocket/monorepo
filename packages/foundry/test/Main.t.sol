// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {Main} from '../src/Main.sol';
import {USDT} from '../src/USDT.sol';


// forge test -vvvv --fork-url https://arb-mainnet.g.alchemy.com/v2/oO7MPAUyViFZB7XJCxahLuBuHh5TKNjF
contract MainTest is Test {
    Main public main;
    USDT usdt;

    address alice = makeAddr("alice");
    uint256 public constant TokensInitialSupply = 1_000_000;

    function setUp() public {
        usdt = new USDT(TokensInitialSupply);
        main = new Main(address(usdt));

        vm.deal(address(alice), 1 ether);

        vm.prank(address(this));
        usdt.transfer(alice, 1000);
    }

    function testStake() public {
        assertEq(usdt.balanceOf(address(alice)), 1000);

        uint256 amount = 1000;

        vm.prank(address(alice));
        usdt.approve(address(main), 1000);

        vm.prank(address(alice));
        main.stake(amount);

        assertEq(main.stakersCount(), 1);
    }
}
