const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const config = require('../../config');
const socketio = require('socket.io');
const log = require('../../log');

const app = express();
const server = http.Server(app);
const io = socketio(server);

if (config.env === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

app.use(express.static(path.join(__dirname, 'public')));

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
