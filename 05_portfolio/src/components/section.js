import React, { Component } from 'react';

class Section extends Component {

    render() {
        var class_name = "card_inner " + this.props.milestone.category;
        var outer_class_name = "card_outer " // + this.props.milestone.category;
        return (
            <div className={outer_class_name}>
            
                <div className={class_name}>
                    <div className="header">{this.props.milestone.header}</div>
                    <div className="description">{this.props.milestone.body}</div>
                    <div className="footer">{this.props.milestone.footer}</div>
                </div>
            </div>
        )
    }

}

export default Section