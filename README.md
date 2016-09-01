## Truffle + Webpack Boilerplate 2016

This is a simple Dapp boilerplate utilising Truffle and Webpack. Fire up the app, then try changing the value of the default balance in `contracts/MetaCoin.sol` from `10000` to `50000`and see the contract be recompiled, hot reloaded and the value updated.

### Coding Style

This repo uses JS Standard.

### Running

Make sure `testrpc` is running in it default port. Then:

- `WEB3_RPC_LOCATION=http://localhost:8545 npm run start` - Starts the development server
- `WEB3_RPC_LOCATION=http://localhost:8545 npm run build` - Generates a build
- `truffle test` - Run the rest suite
