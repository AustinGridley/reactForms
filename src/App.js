import React, { Component } from 'react';
import Router from './nav/Router';
import Nav from './nav/Nav';
import './App.css';

class App extends Component {
 render() {
  return ( 
   <div>
   <Nav></Nav>
   <Router></Router>
   </div>
   )

 }
}

export default App;
