# Smart Contract: Micropayment Channel

Quarter 1 Project by Ruoyu Hou, Jing Wen Lin, Stanley Park, and Zhekai Wang for Section A18.

## Introduction
We will be deploying and interacting with two smart contracts from this [Solidity example](https://docs.soliditylang.org/en/latest/solidity-by-example.html#micropayment-channel).
* We will deploy them using [Remix's Ethereum IDE](https://remix.ethereum.org/).
* We will interact with them using web3.js.

## Running the Project
### Set Up
#### Part 1: Creating an Ethereum Wallet
1. Install the MetaMask browser extension on a supported browser.
2. Create an Ethereum wallet using MetaMask.
    * This should also create an Ethereum account in your wallet.
#### Part 2: Getting Sepolia ETH
1. Create an Alchemy account [here](https://www.alchemy.com/).
2. Using this [link](https://sepoliafaucet.com/), ...
    1. Login to your Alchemy account.
    2. Copy and paste your Ethereum address from MetaMask.
    3. Click "Send Me ETH".
#### Part 3: JavaScript Dependencies
1. Install Node.js
2. Install Yarn (Package Manager)
3. Install two JavaScript libraries using the following commands in your terminal:
    * npm install web3
    * npm install ethereumjs-abi

### Deploying and Verifying ReceiverPays.sol
1. In the /contracts folder, copy the code from ReceiverPays.sol.
2. Go to [Remix's Ethereum IDE](https://remix.ethereum.org/).
    1. Create a new file in "File Explorer" and name it ReceiverPays.sol.
    2. Paste the code from ReceiverPays.sol into this file.
    3. Click the green arrow on the top-left of the file to compile the smart contract.
    4. On the left-hand side of the page, click the fourth icon ("Deploy & run transactions").
    5. In the environments drop-down menu, click "Injected Provider - MetaMask".
    6. Click "Deploy".
3. In the terminal of the IDE, open a link starting with "https://sepolia.etherscan.io/address/".
    1. Click on the hexadecimal next to "To: ".
        * This should open a new page.
    2. In this new page, click on the tab "Contract".
    3. Then click on "Verify and Publicsh".
    4. In the drop-down menu "Please select Compiler Type", choose "Solidity (Single File)".
    5. In the drop-down menu "Please select Compiler Version", choose any version that is >=0.7.0 or <0.9.0.
    6. In the drop-down menu "Please select Open Source License Type", choose any license you want.
    7. Agree to the terms of service and click "Continue".
    8. Paste the code from ReceiverPays.sol.
    9. Click "Verify and Publish".
4. Near the top of the tab "Compiler Output" click on the hexadecimal next to the green text.
    * This should open a new page. If you go to the tab "Contract", you can view and interact with this smart contract.

Step 3 and 4 is only if you want to verify and interact with the smart contract through Etherscan. You could also interact with this smart contract using web3.js, which requires more work to implement.

### Deploying and Verifying SimplePaymentChannel.sol
* This has the same exact steps as "Building the ReceiverPays.sol", except you should replace everything that says "ReceiverPays.sol" with "SimplePaymentChannel.sol".
    * The only difference is after step 3.4. After this step, you should set the constructor arguments.

## Our Deployed Smart Contracts
* We deployed ReceiverPays.sol to the Sepolai testnet, and it can be viewed and interacted with [here](https://sepolia.etherscan.io/address/0x55B332Af2E014a3BaDfCEDe1192e5d699699cA67#code).
* We deployed SimplePaymentChannel.sol to the Sepolai testnet, and it can be viewed and interacted with [here](https://sepolia.etherscan.io/address/0x5d65281126e828ff85932489141802BA3CfD025e#writeContract).
