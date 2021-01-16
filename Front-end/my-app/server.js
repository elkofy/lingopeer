const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const http = require("http");
const server = http.createServer(app);
//const socket = require("socket.io");
//const io = socket(server);

const getUsersInRoom = require('../../Back-end/users');

//
server.use(express.static(path.join(__dirname, 'build')));

server.get('/ping', function (req, res) {
 return res.send('pong');
});

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//
 
// Video
/*const users = getUsersInRoom;

io.on('connection', socket => {
    if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
    socket.emit("yourID", socket.id);
    io.sockets.emit("allUsers", users);
});*/
// fin Video

server.listen(process.env.PORT || 8080);