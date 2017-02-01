import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        return(
            <tr>
                <th>
                {this.props.taskName}
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
            </tr>

        )
    }
}