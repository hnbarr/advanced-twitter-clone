import React, { Component } from 'react'
import './main.css'

export default class LeftComponent extends Component {
  render() {
    return (
      <div className='left'> 
        <div className='left-top'>
            <div className='bioContainer'>
                <section id='intro'>
                    <i id='profile' className="far fa-grin-wink fa-7x"></i>
                    <div id='name'>
                        <p>Heather Barr</p>
                        <i>@hnbarr</i>
                    </div>
                </section>
                
                <section id='stats'>
                    <div id='tweets' className='statCard'>
                        <h6>TWEETS</h6>
                        <p>5</p>
                    </div>
                    <div id='following' className='statCard'>
                        <h6>FOLLOWING</h6>
                        <p>10</p>
                    </div>
                    <div id='followers' className='statCard'>
                        <h6>FOLLOWERS</h6>
                        <p>27</p>
                    </div>
                </section>
            </div>
            <div id='bio'>
                <section id='about'>
                    <h3> Bio </h3>
                    <p>I can display the description of myself here!</p>
                </section>
            </div>
            
        </div>

        <div className='left-bottom'>
            <p>Trending</p>
        </div>
      </div>
    )
  }
}
