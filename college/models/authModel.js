const mongoose = require('mongoose');
const schema = mongoose.Schema;

   // Creating Schema
   const authSchema = new schema ({

    email:{
        type:String,
        required: [true,'Email is required']
    },

    
    password:{
        type:String,
        required: [true,'password is required']
    }


});

const User = mongoose.model('User',authSchema); //create a model that is going to represent our collection in the DB.
    module.exports = User; //here we are exporting this file so that we can use it in other files.