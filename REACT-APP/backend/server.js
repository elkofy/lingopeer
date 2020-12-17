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

app.use(cors({

    origin:"http://localhost:3000",
    credentials:true
}))


app.use(cookieParser("secretcode"))

//Routes
app.post("/login",(req,res) => {
    console.log(req.body);
});

app.post("/register",(req,res) => {
    User.findOne({username: req.body.username},async (err,doc)=>{
        if (err) throw err;
        if (doc) res.setEncoding("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password,10);
            const newUser = new User ({
                username: req.body.username,
                password:hashedPassword,
                langue1:req.body.langue1,
                lvl1:req.body.lvl1

            });
            await newUser.save();
            res.send("User Created");
        }
    })
    console.log(req.body);
});

app.get("/user",(req,res) => {});


app.use(session({
    secret:"secretcode",
    resave:true,
    saveUninitialized:true

}));


//Start server

app.listen(4000, () => {
    console.log('Server has Started')
}

)

