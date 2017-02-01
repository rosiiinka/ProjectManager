import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <center>
            <div>
                {this.props.children}
            </div>
            </center>
        );
    }
}