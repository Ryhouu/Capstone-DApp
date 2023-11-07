# An Escrow Smart Contract DApp

## Abstract

​	In this project, we aim to design and build a decentralized smart contract application, which provides  reliable, efficient, equitable and unbiased escrow services for potential buyers and sellers and secure transactions between the untrusted parties. With the rising expectations for technological and organizational decentralization in place of traditional marketplaces, and the rapid and solid growth of Blockchain technology, we have both a theoretical basis and a practice foundation to support our initiative. Herein, our escrow smat contract should have well-defined functions and consensus   mechanisms that support interactions between user accounts (via MetaMask Wallets) - verify the transactions and prevent themselves from malicious behaviours or even attacks. In the development period, we use Remix IDE to implement, and Etherscan.io to run and monitor the smart contract. To simulate the test transaction requests and cryptocurrency, we will use Sepolia Faucet and testnet ETH. Also, we will create a React frontend and setup a NodeJS/Express server to implement our UI/UX functions. 

## Introduction

==[TODO: intro paragraph]==

### Literature Review

​	Beginning from the Bitcoin whitepaper (2008), "Bitcoin: A Peer-to-Peer Electronic Cash System", the concept of a decentralized cryptocurrency has been outlined. Then, since 2009, blockchain technology has attracted attentions from various groups and evolved remarkable applications, even beyond digital currencies. 

​	Upon this, ethereum is the first Turing-complete decentralized smart contract system, which uses a proof-of-stake-based consensus mechanism. Prior studies have investigated many ways to ensure fairness in protocol design based on the blockchain technology. For example, I. Bentov and R. Kumaresan showed in their 2014 work "How to Use Bitcoin to Design Fair Protocols" that Bitcoin is able to guarantee equity in protocols for secure multi-party computation. And we can expand that idea to secure ETH transactions on our escrow dApp. 

​	Meanwhile, many complex user-facing services such as marketplaces, financial instruments, games, etc., can be built with smart contracts. In the article "An Overview of Smart Contract and Use Cases in Blockchain Technology" by B. K. Mohanta, S. S. Panda and D. Jena, published by IEEE in 2018 9th International Conference on Computing,  multiple components and working principle of smart contract are explained, as well as different use cases and advantage of using smart contract in blockchain application are analyzed. In the 2001 work "Capability-based financial instruments" by M. S. Miller, C. Morningstar and B. Frantz, they provide smart contract implementations that rely on trusted servers to achieve security and authenticity. These work help us to build a cornerstone towards our initiative of building a trustworthy "vending machine" for money and data.

​	Furthermore, in "Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts" by A. Kosba, A. Miller, E. Shi, Z. Wen and C. Papamanthou, published in 2016 IEEE Symposium on Security and Privacy (SP), they argue that most smart contract systems lack transactional privacy and expose the transaction flow and amount details to the entire blockchain. They then introduce Hawk, where the currency flows and amounts transacted are hiden from the public on the blockchain. This work shed us some light in private cash and money transfers in digital currencies, and thus inspires us to consider trust for privacy as well as correctness and availability.  



  ### Data Description

==[TODO: description of relevant data]==

> - If you’re in a methods-focused domain (that is, a domain in which you’re developing new methods), you should describe the kinds of data that your methods are applicable to. For instance, if you’re developing methods for using convolutional neural networks with graphs, you should describe why graph-based data is useful in the real-world.

Describe data in blocks? 

How do ETH, transactions, accounts, gas, clients work as data?



## References

1. B. K. Mohanta, S. S. Panda and D. Jena, "An Overview of Smart Contract and Use Cases in Blockchain Technology," *2018 9th International Conference on Computing, Communication and Networking Technologies (ICCCNT)*, Bengaluru, India, 2018, pp. 1-4, doi: 10.1109/ICCCNT.2018.8494045.
2. A. Kosba, A. Miller, E. Shi, Z. Wen and C. Papamanthou, "Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts," 2016 IEEE Symposium on Security and Privacy (SP), San Jose, CA, USA, 2016, pp. 839-858, doi: 10.1109/SP.2016.55.
