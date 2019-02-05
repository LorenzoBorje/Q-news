import React, { Component } from 'react';
import logo from './logo.svg';
import Masthead from './components/masthead';
import Main from  './components/main';
import Footer from './components/footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <Main />
        <Footer />
      </div>
    );
  }
}

