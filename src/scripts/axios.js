import axios from 'axios';

//https://p2-cms-server.herokuapp.com
//http://localhost:3000
const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export default instance;