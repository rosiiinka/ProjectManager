import React, {Component} from 'react';
import "./Login.css"

export default class LoginForm extends Component {
    render() {
        return (
            <center>
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <a name="username" id="username"></a><label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <center>
                    <input className="btnlogin" type="submit" value="Login" disabled={this.props.submitDisabled}/>
                </center>
            </form>
            </center>
        );
    }
}