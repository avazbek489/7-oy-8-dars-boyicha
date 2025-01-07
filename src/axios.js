import axios from "axios";

const http = axios.create({
  baseURL: "https://api.deezer.com/",
});

export default http;
