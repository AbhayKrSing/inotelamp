const express=require('express')
const MongoConnect=require('./db.js')
const app=express()
app.use(express.json())
app.use('/api/auth',require('./routes/Auth.js'))
app.use('/api/notes',require('./routes/Notes.js'))

MongoConnect();
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(80)