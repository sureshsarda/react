import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDelete from 'material-ui/svg-icons/action/delete';



class TodoItemComponent extends Component {
    render() {
        return (
            <ListItem primaryText={this.props.item.description} rightIcon={<ActionDone />} />
        )
    }
}
class ToDoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: this.props.todo.list()
        }

        console.log('Number of items: ' + this.state.todos.lenght)
    }

    render() {

        var components = []
        for (var i in this.state.todos) {
            components.push(<TodoItemComponent key={this.state.todos[i].description} item={this.state.todos[i]} />)
        }
        return (
            <div>
                <List>
                    {components}
                </List>

            </div>
        )
    }

}

export default ToDoComponent