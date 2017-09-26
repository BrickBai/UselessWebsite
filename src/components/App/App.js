import React, { Component } from 'react';
import './App.css';
import Routes from '../Routes';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;