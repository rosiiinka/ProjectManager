import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/LogoutPage';
import Contacts from './components/Contacts/ContactsPage'
import GanttShedule from './components/GanttShedule/Gantt'
import Comments from './components/Comments/CommentsPage'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={About}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="gantt-shedule" component={GanttShedule}/>
            <Route path="comments" component={Comments}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="logout" component={Logout}/>

        </Route>
    </Router>,
    document.getElementById('root')
);
