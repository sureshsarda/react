import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberCard from './components/card'


class App extends Component {

  constructor(props) {
    super(props);

    var numbers = []
    for (var i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 1000));
    }
    this.setState({
      numbers: numbers
    })
  }
  render() {
    var cards = []
    for (var i = 0; i < 1; i++) {
      var number = Math.floor(Math.random() * 100);
      cards.push(<NumberCard number={number} />)
    }

    return (
      <div className="container">
        <div className="header">
          <h1>Numbers & Trivia</h1>
        </div>
        <div className="card" >
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
