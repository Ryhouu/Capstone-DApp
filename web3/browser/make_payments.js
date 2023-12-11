// making payments
function constructPaymentMessage(contractAddress, amount) {
    return web3.utils.soliditySha3(
        {type: 'address', value: contractAddress},
        {type: 'uint256', value: amount},
    );
}

function signMessage(message, callback) {
    web3.eth.personal.sign(message, web3.eth.defaultAccount, callback);
}

function signPayment(contractAddress, amount, callback) {
    var message = constructPaymentMessage(contractAddress, amount);
    signMessage(message, callback);
}