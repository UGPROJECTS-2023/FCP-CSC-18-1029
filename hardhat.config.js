require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Y1aJ_bT-E1hWmQtRFWjLTz8wT2eKtd3D",
      accounts: {
        mnemonic:
          "depth pyramid cradle panda hurdle neglect shock link glue carbon rescue siege",
      },
    },
  },
};
