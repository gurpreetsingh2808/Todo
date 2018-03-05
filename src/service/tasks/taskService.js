import Api from '../api';

function _handleError(error) {
    alert(error);
}

let taskService = {
    getAlltasks(todoId) {
        return Api.get('/todo/' +todoId+ '/tasks');
    },

    getTask(taskId) {
        return Api.get('tasks/'+taskId)
    },

    addtask(task) {
        return Api.post('/addtask', task);
    },

    updatetask(task) {
        return Api.put('/updatetask', task);
    },

    deletetask(taskId) {
        return Api.delete('/deletetask');
    },

};

module.exports = taskService;