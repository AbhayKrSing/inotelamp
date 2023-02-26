const express=require('express')
const MongoConnect=require('./db.js')
var cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/Auth.js'))
app.use('/api/notes',require('./routes/Notes.js'))

MongoConnect();
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(5000,()=>{
    console.log('listening backend at port 5000')
})