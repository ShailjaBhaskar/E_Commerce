import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-3b3be/us-central1/api",
});

export default instance;
