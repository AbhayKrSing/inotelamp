import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   tag:{
     type:String,
   },
   date:{
    type:String,
    default:new Date()
   }
   
});
module.exports=mongoose.model('User',notesSchema)