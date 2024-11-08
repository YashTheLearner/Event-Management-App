const mongoose = require("mongoose");
const Sign_upschema = new mongoose.Schema({
    Email : String,
    Password : String
})
const userschema =  new mongoose.Schema({
    Email : {
        type : String,
        minLength : 11,
        lowercase : true,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    App : Sign_upschemaschema
},{versionKey : false});
module.exports =  mongoose.model("user",userschema);