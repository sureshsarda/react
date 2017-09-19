import React, { Component } from 'react';
import axios from 'axios';



class NumberCard extends Component {
    constructor(props) {
        super(props);
        var self = this

        this.state = {
            number: props.number,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
     
        var endpoint = 'https://cors.io/?http://numbersapi.com/' + this.props.number.toString() + '?json';
        console.log(endpoint)
        axios({
            url: endpoint,
            method: 'get',
            responseType: 'json'
        })
            .then(function (r) {
                console.log('API call success');
                self.setState({
                    text: r.data.text,
                    number: r.data.number
                });
                console.log('Number: ' + self.state.number);
                console.log('Text: ' + self.state.text);
            })
            .catch(function (r) {
                console.log('API call failed');
                console.log(r);
            });
    }


    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title number">{this.state.number}</div>
                    <div className="card-text description">
                        {this.state.text}
                    </div>
                    <div className="card-text description">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }

}

export default NumberCard