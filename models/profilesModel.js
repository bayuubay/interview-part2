const mongoose=require('mongoose')
  
  const Schema = mongoose.Schema;
  // Create Schema Users (migration)
  const userSchema = new Schema({
    gender: String,
    age:Number
  });
  
  //create model profile
  const Profile = new mongoose.model("profiles", userSchema);
  module.exports=Profile
  