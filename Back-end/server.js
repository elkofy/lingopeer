require('dotenv').config;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const users {};

const app = express();
const server = http.createServer(app);
//const io = socketio(server);
const io = require("socket.io")(server, {
  cors:{
    origin: "https://lingo-peer.netlify.app",
    methods: ["GET","POST"],
    allowedHeaders: ["*"],
    credential: true
  }
});

var corsOptions = {
  origin: "https://lingo-peer.netlify.app",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb+srv://root:L7PjPnz4ZHt5S8uj@database.wdiqg.mongodb.net/<essaie>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lingo peer application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

io.on('connect', (socket) => {
  //listener de connection
  socket.on('join', ({ name, room }, callback) => {
    //listener pour rejoindre une salle, ajoute l'utilisateur à une room grace à son nom
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room); //l'utilisateur user rejoins la room room

    socket.emit('message', { user: '', text: `${user.name}, welcome to the ${user.room} room!`});    //message envoyé à l'utilisateur lors de sa connexion
    socket.broadcast.to(user.room).emit('message', { user: '', text: `${user.name} has joined!` });  //message envoyé à tous les utilisateurs sauf celui qui rejoins

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    //listener de l'envoi de message
    const user = getUser(socket.id); //recupère l'utilisateur qui envoie le message

    io.to(user.room).emit('message', { user: user.name, text: message }); //envoi le message de l'utilisateur user 
    callback();
  });

  socket.on('disconnect', () => {
    //listener de déconnexion
    const user = removeUser(socket.id); //l'utilisateur user est supprimé de la salle

    if(user) {
      io.to(user.room).emit('message', { user: '', text: `${user.name} has left.` }); //message envoyé dans la salle lors de la déconnexion
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)}); //met à jour les utilisateurs dans la salle
    }

    delete users[socket.id];
  })

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
  })

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  })
});