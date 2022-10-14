import axios from 'axios';
const customFetch = axios.create({
  baseURL: "https://master-stack-backend.herokuapp.com/api",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default customFetch;
