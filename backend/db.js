const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoUrl = 'mongodb://127.0.0.1:27017/notelamp'

let connectTomongo = () => {
  mongoose.connect(process.env.MONGO_URL, (err) => {
    if (!err) console.log("Connected")
    else console.log(err.message)
  })
}
module.exports = connectTomongo
