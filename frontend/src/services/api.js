import axios from "axios";

const api = axios.create({
  baseURL: "https://iwb-2213.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
