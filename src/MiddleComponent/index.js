import React, { Component } from 'react'
import './main.css'

export default class MiddleComponent extends Component {
  render() {
    return (
      <div className='middle'>
        <div className='middle-top'>
            <i className="far fa-smile-wink fa-3x"></i>
            <form id='tweet'>
                <input id='textBox' type='text' placeholder="What's happening?"></input>
                <button id='addPhoto' type='submit'>
                    <i className="fas fa-camera fa-2x"></i>
                </button>
            </form> 
        </div>
    
        <div className='middle-bottom'>
        <p>Twitter Feed</p>
        </div>
      </div>
    )
  }
}
