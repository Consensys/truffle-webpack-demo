import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Web3 from 'web3'

import './index.css'

import truffleConfig from '../truffle.js'

var web3Location = `http://${truffleConfig.rpc.host}:${truffleConfig.rpc.port}`

// eslint-disable-next-line
var web3 = new Web3(new Web3.providers.HttpProvider(web3Location))

ReactDOM.render(
  <App web3={web3} />,
  document.getElementById('root')
)
