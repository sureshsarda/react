import React, { Component } from 'react';
import './App.css';
import ToDoComponent from './components/todo'
import { TodoItem, Todo } from './models/todo'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

class App extends Component {
  constructor(props) {
    super(props)

    var todo = new Todo()
    var todoItem1 = new TodoItem('Buy milk')
    var todoItem2 = new TodoItem('Feed the dog')
    var todoItem3 = new TodoItem('Find new galaxies')

    todo.add(todoItem1)
    todo.add(todoItem2)
    todo.add(todoItem3)
    this.state = {
      todo: todo
    }
  }
  render() {
    var style = {
      height: "100%",
      width: "100%",
      display: 'inline-block',
    };

    if (this.state == null) {
      return <p>State is null</p>
    }
    else {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Paper style={style} zDepth={1}>
            <ToDoComponent todo={this.state.todo} />
          </Paper>
        </MuiThemeProvider>
      );
    }
  }
}

export default App;

