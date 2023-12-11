// set the default account to be the sender account
web3.eth.defaultAccount = accounts[0]; 

function signPayment(recipient, amount, nonce, contractAddress, callback) {
    const hash = web3.utils.soliditySha3(
        {type: 'address', value: recipient},
        {type: 'uint256', value: amount},
        {type: 'uint256', value: nonce},
        {type: 'address', value: contractAddress}
    );
    console.log("Keccak-256 Hash:", hash);
    web3.eth.personal.sign(hash, web3.eth.defaultAccount, callback);
}

signPayment(
    addressForSigning,
    1,                                      
    1,                                       
    "0x5d65281126e828ff85932489141802BA3CfD025e", 
    function(error, signature) {
        if (error) {
            console.error(error);
        } else {
            console.log("Signature:", signature);
        }
    }
);