import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "http://localhost:8080",});

export default apiFilmes;