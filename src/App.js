import React, { Component } from 'react';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
