import React, {Component} from 'react';
import Greeting from '../common/Greeting';
import './Header.css'

export default class Header extends Component {
    render() {
        return (

            <div className="jumbotron">
                <img src = "images/logo.png"width={"200"}height={"150"}/>
                <Greeting user={this.props.user}/>
                {this.props.children}
                {/*<div className="container">*/}
                {/*<img className="img-rounded" src="images/home.jpg" width={"100%"}/>*/}
            {/*</div>*/}

            </div>
        );
    }
}