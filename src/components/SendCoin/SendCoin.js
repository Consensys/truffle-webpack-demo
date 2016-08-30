import React, { Component } from 'react'
import './SendCoin.css'

import MetaCoin from 'contracts/MetaCoin.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
MetaCoin.setProvider(provider);

class SendCoin extends Component {
  constructor(props) {
    super(props)

    this.handleSendMeta = this.handleSendMeta.bind(this)
  }

  handleSendMeta(e) {
    e.preventDefault()
    var meta = MetaCoin.deployed();
    console.log(`Recipient Address: ${this.recipientAddressInput.value}`)
    meta.sendCoin(this.recipientAddressInput.value, this.sendAmountInput.value, {from: this.props.sender}).then(function() {
      console.log('SENT')
    }).catch(function(e) {
      console.log(e);
    });
  }

  render() {
    return (
      <form className='SendCoin'>
        <label htmlFor='recipient_address'>Recipient Address</label>
        <input id='recipient_address' className='RecipientAddress' type='text' ref={(i)=>{ if(i) { this.recipientAddressInput = i}}} />
        <label htmlFor='send_amount'>Amount</label>
        <input id='send_amount' className='SendAmount' type='text' ref={(i) => { if(i) { this.sendAmountInput = i}}} />
        <button className='SendBtn' onClick={this.handleSendMeta}>Send</button>
      </form>
    )
  }
}

export default SendCoin
