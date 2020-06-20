import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/todos/';

class TodoService {
  getAllByUserId(uesrID) {
    return axios.get(API_URL + 'search/findByUserID?userID=' + uesrID, { headers: authHeader() });
  }

  addTodo(uesrID, todoItem) {
    return axios.post(API_URL, {
      userID: uesrID,
      todoItem: todoItem,
      isDone: false
    }, { headers: authHeader() });
  }

  removeTodo(todoID) {
    return axios.delete(API_URL + todoID, { headers: authHeader() });
  }

  updateTodo(todo) {
    return axios.patch(API_URL + todo.id, todo, { headers: authHeader() });

  }

  clearAllByUserID(uesrID) {
    return axios.delete(API_URL + todoID, { headers: authHeader() });
  }
}

export default new TodoService();
