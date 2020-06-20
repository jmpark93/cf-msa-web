import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8083/api/book/';

class BookService {
  getInfo() {
    return axios.get(API_URL + 'list', { headers: authHeader() });
  }
}

export default new BookService();