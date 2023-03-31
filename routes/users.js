let mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/Charity')
.then(function(){
    console.log("Database Connected")
})
.catch(function(err){
    console.log(err);
})

let UserSchema = mongoose.Schema({
  name:String,
  amount:String,
  prfl:String
})

module.exports=mongoose.model("participant",UserSchema);


