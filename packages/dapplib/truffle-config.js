require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name recipe night eternal grace dry equal general'; 
let testAccounts = [
"0xfdc0c74fda26bf099227ba78c23cb9f8fb1da4268d29690d114b62b7fa0fb72e",
"0x6b8a1eb8c413de3141440f2b562c254c60392d42851c7f75a05641d04556bdc6",
"0x184c3bfa6f7ec15f7d3c7a0768d7f00323aaf8ed004249e92875bb9a160bc086",
"0x188f101ba32d25d31d7fcc215d8f5ff866b287096c99ee34ce452c36f7a798dc",
"0xcda02c7fb5579167f81704d55ac11af91a0d2306243f809c74b68e2e4f29584a",
"0xb1e08929c61aea9978723dbe0b5f3389e81701b7df201ff7de0f8909c7d808cd",
"0xd8d0d0bbd5bd33d4b0ea8a2fff775b956047cbdb73cc6aac14d5124846331538",
"0x741ea137d0e3e7d1e310bdfdcaac3dbbd8726851c6c84aa7f98ac0432206f99d",
"0x72ae9536c0594b3b598b4c4d8aff1e16d241aa08843bcf66e569eeaefbd3a013",
"0xbc3eca9e274a651da336fc1fc16878a8faed110f97158610c933969da5abfe96"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
