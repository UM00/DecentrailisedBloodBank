// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BloodBank {
    uint public totalBloodUnits;

    event BloodBankAdded(address indexed bbAddress, string indexed bbName);
    event BloodTransferred(address indexed from, address indexed to, uint bloodType);

    struct BloodBank {
        uint apos;
        uint aneg;
        uint bpos;
        uint bneg;
        uint abpos;
        uint abneg;
        uint opos;
        uint oneg;
    }

    mapping (address => BloodBank) public bloodBanks;

    function addBloodBank(address _bbAddress, string memory _bbName) external {
        bloodBanks[_bbAddress] = BloodBank(0, 0, 0, 0, 0, 0, 0, 0);
        emit BloodBankAdded(_bbAddress, _bbName);
    }

    function transferBlood(address _to, uint _bloodType) external {
        BloodBank storage fromBank = bloodBanks[msg.sender];
        BloodBank storage toBank = bloodBanks[_to];

        if (_bloodType == 1 && fromBank.apos > 0) {
            fromBank.apos--;
            toBank.apos++;
        } else if (_bloodType == 2 && fromBank.aneg > 0) {
            fromBank.aneg--;
            toBank.aneg++;
        } else if (_bloodType == 3 && fromBank.bpos > 0) {
            fromBank.bpos--;
            toBank.bpos++;
        } else if (_bloodType == 4 && fromBank.bneg > 0) {
            fromBank.bneg--;
            toBank.bneg++;
        } else if (_bloodType == 5 && fromBank.abpos > 0) {
            fromBank.abpos--;
            toBank.abpos++;
        } else if (_bloodType == 6 && fromBank.abneg > 0) {
            fromBank.abneg--;
            toBank.abneg++;
        } else if (_bloodType == 7 && fromBank.opos > 0) {
            fromBank.opos--;
            toBank.opos++;
        } else if (_bloodType == 8 && fromBank.oneg > 0) {
            fromBank.oneg--;
            toBank.oneg++;
        }

        totalBloodUnits++;
        emit BloodTransferred(msg.sender, _to, _bloodType);
    }

    // Add functions to add blood units to respective banks for different blood types
    // Implement other necessary functions as needed
}
