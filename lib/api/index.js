const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const passport = require('passport');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const errorHandler = require('praeter').errorHandler;
const config = require('../../config');
const mongoose = require('../../config/mongoose');
const socketio = require('socket.io');
const log = require('../../log');
const routes = require('./routes');
const battle = require('./controllers/battle');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(passport.initialize());

if (config.env === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

app.use(helmet());
app.use(bodyParser.json());
app.use('/api', routes);

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.use((err, req, res, next) => {
  if (err.statusCode === 400) {
    const { message, fields } = err;
    return res.status(400).send({ message, fields });
  }
  return next(err);
});

if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    log.error(err);
    next(err);
  });
}

app.use(errorHandler({}));

io.on('connection', battle);

// io.on('connection', (socket) => {
//   log.info('A user connected');

//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });

//   socket.on('disconnect', () => {
//     log.info('A user disconnected');
//   });
// });

module.exports = server;
