const express = require('express');
const httpServer = require('http');
const { Server } = require('socket.io');

const app = express();

const userRoute = require('./routes/user');
app.use('/user', userRoute);

const server = httpServer.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('connection acquired!');
})

server.listen(3000, () => {
    console.log('chat app server is listening on port: 3000');
})

