//fetch data from the api
import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/contests`)
  .then((res) => console.log(res.data.contests))
  .catch((error) => console.log(error))