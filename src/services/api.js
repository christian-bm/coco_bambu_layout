import axios from "axios";

const api = axios.create({
  baseURL: "https://coco-bambu-api.onrender.com",
});

export default api;
