// user.service.js

// User Data Service

import authHeader from "./auth.header";
import axios from "axios";

const API_URL = "http://localhost:8080";

export default class UserService {
  getAll() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
