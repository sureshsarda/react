import React, { Component } from 'react';
import './App.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import LinearProgress from 'material-ui/LinearProgress';
import { green600, grey600 } from 'material-ui/styles/colors';

import TodoItemComponent from './components/todo'
import NewTodo from './components/new_todo'
import { TodoItem, Todo } from './models/todo'


class App extends Component {
    constructor(props) {
        super(props)

        var todo = new Todo()
        todo.add(new TodoItem("Buy Milk"))
        todo.add(new TodoItem("Feed the dog"))
        var item = new TodoItem("Visit another galaxy")
        item.mark_as_complete()
        todo.add(item)

        this.state = {
            todo: todo
        }
    }

    add_item = (event) => {
        if (event.charCode === 13) { // enter key pressed
            console.log('Request to add new item.')
            event.preventDefault();
            this.state.todo.add(new TodoItem(event.target.value))
            event.target.value = ''
            this.forceUpdate()
        }
    }

    toggle = (index) => {
        console.log(index)
        this.state.todo.list()[index].toggle()
        this.forceUpdate()

    }


    render() {
        var helper_p = {
            color: grey600,
            padding: "10px",
            textAlign: "center",
            fontSize: "small",
            fontStyle: "italic"

        }
        var components = []
        var completed = 0
        for (var i in this.state.todo.list()) {
            if (this.state.todo.list()[i].is_complete()) {
                completed += 1
            }
            components.push(<TodoItemComponent key={i} item_index={i} item={this.state.todo.list()[i]} done_callback={this.toggle} />)
        }
        completed = (completed / this.state.todo.list().length) * 100


        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>

                    <AppBar
                        title="Daily Todo"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Paper zDepth={1}>
                        <div>

                            <NewTodo add_callback={this.add_item} />
                            <LinearProgress mode="determinate" value={completed} color={green600} />
                            <List>
                                {components}
                            </List>
                            <div style={helper_p}>
                                <p style={helper_p}>Click on item to toggle it's state</p>
                            </div>
                        </div>
                    </Paper>

                </div>
            </MuiThemeProvider>
        );

    }
}

export default App;

