import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZlYzVmZDliMTY1ODU5OTQ2MTBjZDhkNzgzYTNmOSIsIm5iZiI6MTc3ODUwMTI3OC45OTYsInN1YiI6IjZhMDFjNjllYmZkMzFhYzA5MzNhNzYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tK-4Avz7OxkQW-UADRg9Hi0NMTJAvGUB4b0w9B-CW5k",
  },
});

export default api;