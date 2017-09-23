import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class NewTodo extends Component {

    render() {
        var style = {
            padding: "20px",
            position: "relative"
        }
        return (
            <div style={style}>
                <TextField fullWidth={true} hintText="Type task and hit enter" onKeyPress={this.props.add_callback} />
            </div>
        )
    }
}

export default NewTodo;