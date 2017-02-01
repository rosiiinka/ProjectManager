import React, {Component} from 'react';
import "./Comments.css"

export default class CommentsForm extends Component {




    render() {
        return (
            <center>
            <form onSubmit={this.props.onSubmitHandler}>

                <div className="form-group">
                    <label>Leave a comment:</label>
                    <textarea
                        className="form-control"
                        name="comment"
                        value={this.props.comment}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div><center>
                <input className="btncom" type="submit" value="Submit comment"/>
            </center>
            </form>
            </center>
        );
    }
}
