const express = require('express')
const User = require ('../models/users.model')
const jwt = require("jsonwebtoken")

exports.signup = (req , res)=>{
    let { email, password, name, age, bloodgroup, weight} = req.body;

    let user = new User({
        email,
        password,
        name,
        age,
        bloodgroup,
        weight
    })

    user.save().then((user)=>{
        res.status(200).json({"Message":"User Created" , user:user})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({"Message":"User Not Created" , err:err})
    })
}

exports.login = (req, res)=>{

    let{email, password} = req.body;
    User.findOne({email:email}).then((foundUser)=>{
        if(!foundUser){
            res.status(404).send({"Message":"User Not FOUND"})
            console.log("User not found")
        }else{
            if(foundUser.password == password){
                let token = jwt.sign({
                    id:foundUser._id,
                    email:foundUser.email
                },
               "saimsaleem",{
                    expiresIn: '5h'
                })
                console.log( foundUser.name +" logged in!")
                res.status(200).send({"Message":"Successfully LOGGED IN", user:foundUser, token:token})
            }else{
                console.log("Invalid Password")
                res.status(500).send({"Message":"Invalid Password"})
            }
        }
    })
}

exports.getUsers = async (req,res)=>{


    await User.find().then((user) => {
    
    res.status(200).json({
        user: user,
        });
    
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        });

}

exports.getUser = async (req,res) =>{

        let decodedID;
        let token = req.headers['token'];
        jwt.verify(token, 'saimsaleem', (err, decoded)=>{
            if(!err){
                req.decoded = decoded;
                decodedID = decoded.id;
            }else{
                res.status(500).send({Message:"Not Authorized"})
            }
        })

        try {
      
          const user = await User.findById(decodedID);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json(user);
        } catch (error) {
          console.error('Error decoding token:', error);
          res.status(401).json({ message: 'Unauthorized' });
        }
}
