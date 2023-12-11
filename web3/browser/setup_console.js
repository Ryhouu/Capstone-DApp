// developer's console check
console.log(window.ethereum) // should be a proxy object
console.log(window.ethereum.isMetaMask) // should be true

// create a web3 instance
const web3 = new Web3(window.ethereum);

// save the accounts for later use
let accounts;
ethereum.request({ method: 'eth_requestAccounts' })
.then(_accounts => {
    accounts = _accounts; 
    console.log('Accounts:', accounts);
})
.catch(error => {
    console.error('Error:', error);
});


// sample: get the account balance
web3.eth.getBalance(accounts[0])
.then(balance => {
    console.log('Balance:', balance);
})
.catch(error => {
    console.error('Error:', error);
});


// sample: web3.eth.personal.sign
const message = "Hello world";
const addressForSigning = accounts[1]; // The first account from MetaMask
web3.eth.personal.sign(message, addressForSigning)
.then(signature => {
    console.log('Signature:', signature);
})
.catch(error => {
    console.error('Error:', error);
});