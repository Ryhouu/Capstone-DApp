const { Web3 } = require('web3'); //  web3.js has native ESM builds and (`import Web3 from 'web3'`)

// Set up a connection to the Ganache network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const ABI = require("./abi.json");
const sampleABI = require("./cool_cats_abi.json")

// Log the current block number to the console
web3.eth
	.getBlockNumber()
	.then(result => {
		console.log('Current block number: ' + result);
	})
	.catch(error => {
		console.error(error);
	});

myContract = new web3.eth.Contract(sampleABI, "0x1A92f7381B9F03921564a437210bB9396471050C")
myContract.handleRevert = true;

console.log(myContract._methods)

async function interact() {
	// const providersAccounts = await web3.eth.getAccounts();
	// const defaultAccount = providersAccounts[0];

	try {
		// Get the current value of my number
		const myNumber = await myContract.methods.getPrice().call();
		console.log('my number value: ' + myNumber);
    } catch (error) {
		console.error(error);
	}
}

interact();


