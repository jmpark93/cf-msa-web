import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/user/';

class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }

  getProfile(id) {
    return axios.get(API_URL + id, { headers: authHeader() });
  }
}

export default new UserService();