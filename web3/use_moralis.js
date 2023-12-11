const Moralis = require("moralis").default;
require("dotenv").config();
const ABI = require("./abi.json");

Moralis.start({
    apiKey: process.env.MORALIS_KEY
}).then(async() => {

    const response = await Moralis.EvmApi.utils.runContractFunction({
        address: "0x390c91f4208D4791272adC86966Cca3b08C859a6",
        functionName: "retrieve",
        abi: ABI,
        // params: {"tokenId":}
    })

    console.log(response.raw);
})