import {get, post, update} from './requester';

function createTask(taskName, taskStart,taskEnd,callback) {
    let TaskData = {
        taskName: taskName,
        taskStart: taskStart,
        taskEnd: taskEnd
    };
    post('appdata', 'tasks', TaskData, 'kinvey')
        .then((response) => {
            
        });
}
function loadTasks(callback) {
    // Request tasks from db
    get('appdata', 'tasks', 'kinvey')
        .then(callback);
}
export default {createTask,loadTasks};