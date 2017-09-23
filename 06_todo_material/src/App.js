import React, { Component } from 'react';
import './App.css';
import ToDoComponent from './components/todo'
import NewTodo from './components/new_todo'
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

    this.add_item = this.add_item.bind(this)
  }

  add_item(description) {
    this.state.todo.add(new TodoItem(description))
    this.forceUpdate()

  }
  render() {
    var style = {
      height: "100%",
      width: "100%"
    };

    if (this.state == null) {
      return <p>State is null</p>
    }
    else {
      return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Paper style={style} zDepth={1}>
              <div>
                <NewTodo add_callback={this.add_item}/>
                <ToDoComponent todo={this.state.todo} />
              </div>
            </Paper>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default App;

