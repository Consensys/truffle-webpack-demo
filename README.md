## Truffle + Webpack Demo App

![MetaCoin Example](https://github.com/ConsenSys/truffle-webpack-demo/blob/master/docs/images/metacoin.jpg?raw=true)

This is a simple Dapp boilerplate utilising Truffle and Webpack. Fire up the app, then try changing the value of the default balance in `contracts/MetaCoin.sol` from `10000` to `50000`and see the contract be recompiled, hot reloaded and the value updated.

Note: Make sure you are running at least `geth 1.4.17-stable-3885907c`

### Coding Style

This repo uses JS Standard.

### Running

0. Clone this repo
0. `npm install`
0. Make sure `testrpc` is running on its default port. Then:
  - `WEB3_RPC_LOCATION=http://localhost:8545 npm run start` - Starts the development server
  - `WEB3_RPC_LOCATION=http://localhost:8545 npm run build` - Generates a build
  - `truffle test` - Run the rest suite
