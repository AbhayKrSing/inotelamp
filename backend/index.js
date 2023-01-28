const express=require('express')
const MongoConnect=require('./db.js')
const app=express()

MongoConnect();
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(80)