import axios from "axios";

axios.get('http://localhost:8081')

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://ukraine-api.herokuapp.com',
  headers: {
    "Content-type": "application/json"
  }
});