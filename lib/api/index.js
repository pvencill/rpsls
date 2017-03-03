const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const passport = require('passport');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('praeter').errorHandler;
const config = require('../../config');
const socketio = require('socket.io');
const log = require('../../log');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(config.db);

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

app.use(errorHandler({}));

io.on('connection', (socket) => {
  log.info('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    log.info('A user disconnected');
  });
});

module.exports = server;
