const {Web3} = require('Web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Replace with your network URL
const contractAddress = '0x37eA78B2E216f63ee3f56038cf98ebA695f1c8c1'; // Replace with your deployed contract address
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "bbAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "bbName",
        "type": "string"
      }
    ],
    "name": "BloodBankAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "bloodType",
        "type": "uint256"
      }
    ],
    "name": "BloodTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "bloodBanks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "apos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "aneg",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bpos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bneg",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "abpos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "abneg",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "opos",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "oneg",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalBloodUnits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_bbAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_bbName",
        "type": "string"
      }
    ],
    "name": "addBloodBank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_bloodType",
        "type": "uint256"
      }
    ],
    "name": "transferBlood",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const bloodBankContract = new web3.eth.Contract(contractABI, contractAddress);

module.exports= { web3, bloodBankContract };
