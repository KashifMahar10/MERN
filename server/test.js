const dotenv = require("dotenv"); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());

// Middleware ---> so here we are importing Auth.js to check either user is login in or not.
app.use(require('./router/auth'));

const User = require('./models//UserSchema');

//Middleware---> is like a security guard which checks that either you're login or not.

const middleware = (req,res,next)=>{
    console.log("Hello from Middleware");
    next();
}

app.get('/',(req,res)=>{
    res.send("Hello from Backend Team");
});

app.get('/about', middleware,(req,res)=>{
    res.send(" HELLO FROM ABOUT PAGE");
});
app.get('/contact',(req,res)=>{
    res.send(" HELLO FROM CONTACT PAGE");
});

app.get('/login',(req,res)=>{
    res.send("Hello from Singin Page")
});

app.get('/signup',(req,res)=>{
    res.send("Hello from Signup page")
});

app.listen(port,()=>{
    console.log(`Listening to PORT ${port}`);
});