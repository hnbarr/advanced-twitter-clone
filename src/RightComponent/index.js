import React, { Component } from 'react'
import './main.css'

export default class RightComponent extends Component {
  render() {
    return (
      <div className='right'>
        <div className='right-top'>
        <p>Who to Follow</p>
        </div>
    
        <div className='right-bottom'>
        <p>Videos/Other Content</p>
        </div>
      </div>
    )
  }
}
