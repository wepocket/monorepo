// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Main is Ownable {
    IERC20 public immutable USDT;

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Custom Errors
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    error Main__amountMustBeGreaterThanZero();
    error Main__stakingBalanceMustBeGreaterThanZero();
    error Main__TransferFailed();



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Variables
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    address[] public stakers;
    struct StakeInfo {
        uint256 StakedBalance;
        bool hasStaked;
        bool isStaking;
    }
    mapping(address user => StakeInfo) public Stakes;



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Events
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    event SuccessfulStaked(address indexed user, uint256 amount);
    event SuccessfulUnstake(address indexed user, uint256 amount);



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Constructor
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    constructor(address _stakingToken) Ownable(msg.sender) {
        USDT = IERC20(_stakingToken);
    }



    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            Public Functions
    /////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    function stake(uint256 _amountToStake) public {
        if (_amountToStake <= 0) {
            revert Main__amountMustBeGreaterThanZero();
        }

        if (!Stakes[msg.sender].hasStaked) {
            stakers.push(msg.sender);
        }

        Stakes[msg.sender].StakedBalance += _amountToStake;
        emit SuccessfulStaked(msg.sender, _amountToStake);

        Stakes[msg.sender].hasStaked = true;
        Stakes[msg.sender].isStaking = true;

        (bool success) = USDT.transferFrom(msg.sender, address(this), _amountToStake);

        if(!success) {
            revert Main__TransferFailed();
        }
    }

    function unstake() public {
        uint256 amountToUnstake = Stakes[msg.sender].StakedBalance;
        if (amountToUnstake <= 0) {
            revert Main__stakingBalanceMustBeGreaterThanZero();
        }

        Stakes[msg.sender].StakedBalance = 0;

        Stakes[msg.sender].isStaking = false;
        emit SuccessfulUnstake(msg.sender, amountToUnstake);

        USDT.transfer(msg.sender, amountToUnstake);
    }

    function stakersCount() public view returns (uint256) {
        return stakers.length;
    }
}
