import axios from "axios";

const token = localStorage.getItem("token");

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  // Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
};

// if (code) headers.Authorization = `Bearer ${code}`;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
});

export default api;
