import axios from "axios";
import authHeader from "./userAuthHeader";
const customFetch = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Content-Type": "application/json",
  },
});




export default customFetch;
