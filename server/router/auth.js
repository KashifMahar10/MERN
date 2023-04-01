const express = require('express');
// we need ROUTER for BACKEND so we will add the express router.
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(":HELLO FROM ROUTER")
});

router.post('/register',(req,res)=>{
    console.log(req.body);    

})


module.exports = router;
