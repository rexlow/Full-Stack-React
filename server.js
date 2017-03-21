import express from 'express';
import fs from 'fs';

const server = express();

import config from './config';
import apiRouter from './api';

server.set('view engine', 'ejs');

//routes
server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

//middleware
server.use(express.static('public'));
server.use('/api', apiRouter);

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.log('Express is listening on port: ', config.port);
});