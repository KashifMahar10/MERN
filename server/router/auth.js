            const express = require('express');
            const bcrypt = require('bcrypt');
            const jwt = require('jsonwebtoken');
            // we need ROUTER for BACKEND so we will add the express router.
            const router = express.Router();

            require('../db/conn');
            const User = require('../models/UserSchema');


            router.get('/',(req,res)=>{
                console.log("HELLO FROM ROUTER")
            });

            router.post('/register', async (req,res)=>{

                const {name, email, phone , work, password, cpassword} = req.body;
                if(!name || !email || !phone || !work || !password || !cpassword)
                {
                    return res.status(422).json({error: "Please fill all fileds"});
                }
                try {
                    const userExist = await User.findOne({email:email})
                    if(userExist)
                    {
                        return res.status(422).json({message:"Email already exist"})
                    }
                    
                    const user = new User({name, email, phone , work, password, cpassword});
                            
                    await user.save();
                    return res.status(201).json({message:"user Registered sucessfully"});
                    
                    
                        //return res.status(500).json({message:"Failed to register"});
                    
                } catch (error) {
                    console.log(error);
                    
                }
            
            
            })


        //Login Router

        router.post('/login', async(req,res)=>{
            // console.log(req.body)
            // res.json({message:"Done"});
            try {
                let token;
                const {email, password} = req.body;
                if(!email || !password)
                {
                    return res.status(400).json({message:"Please fill all fields"});
                }

                const userLogin = await User.findOne({email:email})
                if(userLogin)
                {
                 const isMatch = await bcrypt.compare(password, userLogin.password)
                 //token
                  token = await userLogin.generateAuthToken();
                 console.log(token);

                 //store cookie
                 res.cookie("jwtoken", token, {
                    expires: new Date(Date.now()+ 2589200000),
                    httpOnly: true
                 });

                if(!isMatch)
                {
                    res.status(400).json({error:"Error in login"});
                }
                else
                {
                    res.json({message:"User login sucessfull"});

                }
                
                }
                else
                {
                    res.status(400).json({error:" Invalid login problem..!"}); 

                }
                
            } catch (error) {
            console.log(error) 
            }
        })

            module.exports = router;
