const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require('./user');
const server = require('http').Server(app);
const io = require('socket.io')(server);   
const { v4: uuidV4 } = require('uuid');    
const  datauser= 'null';
//-----END OF IMPORTS----

mongoose.connect(
    "mongodb+srv://root:L7PjPnz4ZHt5S8uj@database.wdiqg.mongodb.net/<dbname>?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
() => {
console.log("Mangoose Is connected");
}
);

//Midlleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
  );
  app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
//---endofmiddleware-----





//Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

app.post("/register" , (req, res) => {
    User.findOne({username: req.body.username}, async (err,doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password,10);

            const newUser = new User({
                username: req.body.username,
                password:hashedPassword,
                langue1:req.body.langue1,
                lvl1:req.body.lvl1,
                langue2:req.body.langue2,
                lvl2:req.body.lvl2,

            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

app.get("/user", (req, res) => {
    res.send(req.user);
    console.log(req.user);

  });


// Video

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

//Start server

app.listen(4000, () => {
    console.log('Server has Started')
})

