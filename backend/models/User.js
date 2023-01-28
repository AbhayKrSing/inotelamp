const mongoose=require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
   name:{
    type:String,
    required:true
   },
   password:{
    type:String,
    require:true
   },
   email:{
     type:String,
     required:true,
     unique:true
   },
   date:{
    type:String,
    default:new Date
   }
   
});
module.exports=mongoose.model('User',userSchema)