import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Web3 from 'web3';

import './index.css'

// eslint-disable-next-line
var web3 = new Web3(new Web3.providers.HttpProvider(WEB3_RPC_LOCATION))

ReactDOM.render(
  <App web3={web3} />,
  document.getElementById('root')
)
