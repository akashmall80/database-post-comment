const mongoose = require('mongoose');
//email should be unique
//timestamps true to know when was it created and updated
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true  
    }
},{
    timestamps:true
})

const User = mongoose.model('Userdata',userSchema);

module.exports = User;