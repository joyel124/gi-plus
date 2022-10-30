// auth.service.js
// Authentication & Authorization Service

import axios from "axios";

const API_URL = "http://localhost:8080/users";

const USER_KEY = "user";

export default class AuthService {
  signIn(request) {
    return axios.post(`${API_URL}/sign-in`, request).then((response) => {
      if (response.data.token) {
        localStorage.setItem(USER_KEY, JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  signOut() {
    localStorage.removeItem(USER_KEY);
  }

  signUp(request) {
    return axios.post(`${API_URL}/sign-up`, request);
  }
}
