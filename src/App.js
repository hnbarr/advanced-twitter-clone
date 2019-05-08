import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent';
import LeftComponent from './LeftComponent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent' 

function App(){
   return (
    <div className='App'>
    <NavComponent />
      <div className='components'>
      <LeftComponent />
      <MiddleComponent />
      <RightComponent />
      </div>
    </div>
  );
 }
export default App;
