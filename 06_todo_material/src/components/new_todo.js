import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class NewTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}

        this.handle_change = this.handle_change.bind(this)
    }

    handle_change(event) {
        if (event.charCode === 13) { // enter key pressed
            event.preventDefault();
            console.log(event.target.value)
            this.setState({value: event.target.value})

            this.props.add_callback(event.target.value)
            event.target.value = ''
          }
        
    }


    render() {
        var style = {
            padding: "20px",
            position: "relative"
        }
        return (
            <div style={style}>
                <TextField fullWidth={true} hintText="Type task and hit enter" onKeyPress={this.handle_change} />
            </div>
        )
    }
}

export default NewTodo;