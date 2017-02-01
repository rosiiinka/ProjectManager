import React, {Component} from 'react';
import "./Gantt.css";
import tasks from "../../models/tasks";
import Task from "./Task";

class TableForm extends React.Component {

    render(){
        return(
            <div><center>
                <form onSubmit={this.props.onSubmitHandler}>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="taskName"
                            value={this.props.taskName}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task Start</label>
                        <input
                            className="form-control"
                            type="text"
                            name="taskStart"
                            value={this.props.taskStart}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task End</label>
                        <input
                            className="form-control"
                            type="text"
                            name="taskEnd"
                            value={this.props.taskEnd}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div><center>
                    <input className="btntask" type="submit" value="Create Task" disabled={this.props.submitDisabled}/>
                </center>
                </form>
            </center>

            </div>
        )
    }
}

export default class PJM extends Component {

    constructor(props) {
        super(props);
        this.state = {taskName: '', taskStart: '',taskEnd: '', submitDisabled: false,tasks:[],showReply: false};
        this.bindEventHandlers();
        
    }

    addTask(e){

        e.preventDefault();
        this.setState({showReply: !this.state.showReply});
        
        
    }
    deleteTask(){

    }
    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display teams
        this.setState({tasks: response})
    }

    componentDidMount() {
        // Request list of teams from the server
        tasks.loadTasks(this.onLoadSuccess);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'taskName':
                this.setState({ taskName: event.target.value });
                break;
            case 'taskStart':
                this.setState({ taskStart: event.target.value });
                break;
            case 'taskEnd':
                this.setState({ taskEnd: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        tasks.createTask(this.state.taskName, this.state.taskStart,this.state.taskEnd, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div>
                {this.state.showReply && <TableForm  taskName={this.state.taskName}
                                                     taskStart={this.state.taskStart}
                                                     taskEnd = {this.state.taskEnd}
                                                     submitDisabled={this.state.submitDisabled}
                                                     onChangeHandler={this.onChangeHandler}
                                                     onSubmitHandler={this.onSubmitHandler}/>}
               <center> <table>
                    <tbody>
                        <tr>
                            <th>
                                
                               <center> <button className="btnaddtask" onClick={this.addTask.bind(this)}>Add Task</button>
                               </center>
                            </th>

                            <th>Week 1</th>
                            <th>Week 2</th>
                            <th>Week 3 </th>
                            <th>Week 4</th>
                            <th>Week 6 </th>
                            <th>Week 7</th>
                            <th>Week 8</th>
                            <th>Week 9</th>
                            <th>Week 10</th>
                            <th>Week 11</th>
                            <th>Week 12</th>

                        </tr>
                        
                            {this.state.tasks.map((e) => {
                                return <Task taskName={e.taskName}/>
                            })}
                        

                    </tbody>
                </table>
               </center>
            </div>

            
            
        );


    }

}
