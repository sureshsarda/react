import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionDone from 'material-ui/svg-icons/action/done';
import {green600} from 'material-ui/styles/colors';

class TodoItemComponent extends Component {

    toggle_state = () => {
        this.props.done_callback(this.props.item_index)
    }

    render() {
        var primary_text = this.props.item.description
        
        var color = ""
        var left_color = {}
        if (this.props.item.is_complete()) {
            var left_color = {
                borderLeft: "3px solid " + green600
            }
            var color = green600
        }

        return (
            <ListItem 
                style={left_color}
                primaryText={this.props.item.description} 
                rightIcon={<ActionDone color={color}/>} 
                onClick={this.toggle_state}
                />
        )
    }
}

export default TodoItemComponent;