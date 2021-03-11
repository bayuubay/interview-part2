const mongoose=require('mongoose')
  
  const Schema = mongoose.Schema;
  // Create Schema Users (migration)
  const userSchema = new Schema({
    username: String,
    password: String,
    profileId:{type:mongoose.Schema.Types.ObjectId,ref:"profiles"}
  });
  
  //create model users
  const User = new mongoose.model("users", userSchema);
  module.exports=User
  