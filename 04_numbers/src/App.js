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
    for (var i = 0; i < 5; i++) {
      var number = Math.floor(Math.random() * 1000);
      cards.push(<NumberCard number={number} />)
    }

    return (
      <div class="container">
        <div>
          <h1>Numbers and trivia</h1>
        </div>
        <div className="card-columns" >
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
