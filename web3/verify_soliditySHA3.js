const { Web3 } = require('web3'); 
const provider = new Web3.providers.HttpProvider('http://localhost:7545')
const web3 = new Web3(provider);
const abi = require('ethereumjs-abi')

var contractAddress = "0x2843C0062ceBb21f38Ac367dce933Cc117FF5385";
var amount = 1;

var hash1 = abi.soliditySHA3(
        ["address", "uint256"],
        [contractAddress, amount]
    );
console.log(hash1)
console.log("0x" + hash1.toString("hex"))

var hash2 = web3.utils.soliditySha3(
    {type: 'address', value: contractAddress},
    {type: 'uint256', value: amount},
);
console.log(hash2)