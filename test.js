const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello from Backend Team");
});

app.get('/about',(req,res)=>{
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