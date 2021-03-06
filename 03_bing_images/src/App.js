import React, { Component } from 'react';
import ImageNavigationContainer from './components/image_navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="w3-center">
        <h1>Bing Image of the day</h1>
        <ImageNavigationContainer />
      </div>
    );
  }
}

export default App;
