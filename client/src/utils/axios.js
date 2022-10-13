import axios from "axios";
const customFetch = axios.create({
  baseURL: "/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});




export default customFetch;
