import React, { Component } from 'react'
import './main.css'

export default class NavComponent extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav-left'>
            <div id='home' className='navSec'>
                <i id='homeIcon' className="fas fa-home fa-2x"></i>
                <p> Home </p>
            </div>

            <div id='moments' className='navSec'>
                <i id='momentsIcon' className="fas fa-bolt fa-2x"></i>
                <p> Moments</p>
            </div>

            <div id='notifications' className='navSec'>
                <i id='notificationsIcon' className="far fa-bell fa-2x"></i>
                <p> Notifications </p>
            </div>
          
            <div id='messages' className='navSec'>
                <i id='messagesIcon' className="far fa-envelope-open fa-2x"></i>
                <p> Messages </p>
            </div>
        </div>

        <div className='nav-mid'>
            <i id='logo' className="fab fa-twitter fa-3x"></i>
        </div>

        <div className='nav-right'>
            <form>
                <input type='text' id='search' placeholder='Search Twitter'></input>
                <button id='searchBtn' type='submit'> 
                    <i className="fas fa-search fa-2x"></i>
                </button>
            </form>
            <div className='btnSection'>
            <i className="far fa-grin-tongue fa-2x"></i>
                <button id='tweetBtn' type='submit'>
                <i id='write' className="fas fa-signature"></i>
                    Tweet
                </button>
            </div>
        </div>
      </div>
    )
  }
}
