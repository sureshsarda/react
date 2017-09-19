import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section'
import Timeline from './timeline'

class App extends Component {
  render() {
    var sections = []
    var timeline = Timeline
    for (var i in timeline) {
      sections.push(<Section milestone={timeline[i]} />)
    }
    return (
      <div>
        {sections}
      </div>
    );
  }
}

export default App;
