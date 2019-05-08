import React, { Component } from 'react'
import './main.css'

export default class MiddleComponent extends Component {
  render() {
    return (
      <div className='middle'>
        <div className='middle-top'>
        <i class="far fa-grin-tongue fa-3x"></i>
        <form id='tweet'>
            <input type='text' placeholder="What's happening?" onSubmit=''></input>
            <button id='addPhoto' type='submit' onclick=''>
                <i class="fas fa-camera fa-2x"></i>
            </button>
        </form>
      </div>
    
        <div className='middle-bottom'>
        <p>middle-bottom</p>
        </div>
      </div>
    )
  }
}
