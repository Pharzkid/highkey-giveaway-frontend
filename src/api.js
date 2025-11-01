import axios from "axios";
import { API_BASE_URL } from "./config.js"

const API = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000",
});

export default API;
