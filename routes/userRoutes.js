const express = require('express');
const User = require('../models/userModel.js');;
const router = express.Router();

//POST -: http://localhost:5000/api/auth/signup
//BODY -> raw -> JSON -> 
// {
//     "username" : "ana",
//     "email" : "ana@gmail.com",
//     "password" : "ana@7447",
//     "phone" : 7447640893
// }

router.post('/signup', async(req,res) => {
    const {username, email, password, phone} = req.body;

    try{
        const user = new User({username, email, password, phone})
        await user.save();
        res.status(201).json({message : "User registerd successfully..."})
    }catch(error){
        res.status(400).json({message : "Error while registering user..."})
    }
})


// POST -: http://localhost:5000/api/auth/login
// BODY -> row -> JSON
// {
//     "email" : "ana@gmail.com",
//     "password" : "ana@7447"
// }
router.post('/login', async(req,res) => {

    const {email , password} = req.body;

    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({message : "Invalid Email..."})
        }

        if(user.password !== password){
            return res.status(401).json({message : "Invalid Password..."})
        }

        res.status(200).json({message : "Login Successfully..."})


    }catch(error){
        res.status(400).json({message : "Error While User login...",error})
    }

})

module.exports = router;