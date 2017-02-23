import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Web3 from 'web3'

import './index.css'

var web3Location = `http://${myEnv.host}:${myEnv.port}` //this is defined in webpack DefinePlugin

window.addEventListener('load', function() {
  var web3Provided;
  // Supports Metamask and Mist, and other wallets that provide 'web3'.
  if (typeof web3 !== 'undefined') {
    // Use the Mist/wallet provider.
    // eslint-disable-next-line
    web3Provided = new Web3(web3.currentProvider);
  } else {
    web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location))
  }

  ReactDOM.render(
    <App web3={web3Provided} />,
    document.getElementById('root')
  )
});
