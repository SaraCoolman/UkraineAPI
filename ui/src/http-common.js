import axios from "axios";

axios.get('https://62ad8ed96d0676527f26bef3--whimsical-brioche-26147f.netlify.app')

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://ukraine-api.herokuapp.com',
  headers: {
    "Content-type": "application/json"
  }
});