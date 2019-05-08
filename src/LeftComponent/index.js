import React, { Component } from 'react'
import './main.css'

export default class LeftComponent extends Component {
  render() {
    return (
      <div className='left'> 
        <div className='left-top'>
            <i className="far fa-grin-tongue fa-7x"></i>
            <p>bio here!</p>
        </div>
    
        <div className='left-bottom'>
        <p>left-bottom</p>
        </div>
      </div>
    )
  }
}
