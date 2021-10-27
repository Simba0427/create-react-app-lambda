require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'b0bf5dbe5238db630d79dd2a6927c5d74d830d52e8459ec709f1d0b5c7978b18';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/8d06cb1983604c9891b98fc97e6ffdb5", 0)
        },
        networkCheckTimeout: 30000,
        network_id: 3,
        from: "0x2cf481acC74cB6e527b3bAd1531Fd85710289421",
        gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
      }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
