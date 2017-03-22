//fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';

const serverRender = () => 
  axios.get(`${config.serverUrl}/api/contests`)
    .then((res) => {
      return ReactDOMServer.renderToString(
        <App initialContests={res.data.contests} />
      );
    })
    .catch((error) => console.log(error))

export default serverRender;

