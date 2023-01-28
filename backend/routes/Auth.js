const mongoose=require('mongoose')
mongoose.set('strictQuery', true)
const User=require('../models/User.js')
const express=require('express')
router=express.Router()

//Create a User using:POST "/api/auth".Doesn't require Auth
router.post('/',(req,res)=>{
    user=new User(req.body)
    user.save().then((value)=>{
        res.send(value)
        console.log('data saved')
    }).catch((err)=>{
       console.log(err.message)
    })  
})
module.exports=router