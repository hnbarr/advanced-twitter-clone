import React, { Component } from 'react'
import './main.css'

export default class NavComponent extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav-left'>
            <i id='home' class="fas fa-home fa-2x"></i>
            <i id='moments' class="fas fa-bolt fa-2x"></i>
            <i id='notifications' class="far fa-bell fa-2x"></i>
            <i id='messages' class="far fa-envelope-open fa-2x"></i>
        </div>

        <div className='nav-mid'>
            <i id='logo' class="fab fa-twitter fa-3x"></i>
        </div>

        <div className='nav-right'>
            <form>
                <input type='text' id='search' placeholder='Search Twitter' onSubmit=''></input>
                <button type='submit'> 
                    <i id='searchBtn' class="fas fa-search fa-2x"></i>
                </button>
            </form>
            <i class="far fa-grin-tongue fa-3x"></i>
            <button id='tweetBtn' type='submit' onclick=''>
                <i id='write' class="fas fa-signature"></i>
                Tweet
            </button>
        </div>
      </div>
    )
  }
}
