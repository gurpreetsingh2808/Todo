import Api from '../api';
import Properties from '../../properties';
import Strings from "../../app_assets/strings";

function _handleError(error) {
    alert(error);
}

let TodoService = {
    getAllTodos() {
        return Api.get('/todos');
        // return fetch(Properties.url_base +'/todos')
        //     .then((response) => {return response;
        //     });
    },

    getTodo(todoId) {
        return Api.get('todo/'+todoId)
    },

    addTodo(todo) {
        return Api.post('/addtodo', todo);
    },

    updateTodo(todo) {
        return Api.put('/updatetodo', todo);
    },

    deleteTodo(todoId) {
        return Api.delete('/deletetodo');
    },
};

module.exports = TodoService;