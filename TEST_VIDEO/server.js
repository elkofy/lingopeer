const express = require("express");
const https = require("https");
const app = express();
const fs = require('fs');
const server = https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert'),
    requestCert: false,
    rejectUnauthorized: false
}, app);
const io = require("socket.io-client")(server);
//const socket = require('socket.io-client')('https://192.168.1.77', {transports: ['websoscket'], rejectUnauthorized: false});

const users = {};

io.on('connection', socket => {
    if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
    socket.emit("yourID", socket.id);
    io.sockets.emit("allUsers", users);
    socket.on('disconnect', () => {
        delete users[socket.id];
    })

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
    })

    socket.on("acceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
});

server.listen(8000, () => console.log('server is running on port 8000'));


