//logic to create user collection and logic to define user schema

import mongoose from "mongoose";
const appschema = new mongoose.Schema({
    Name : String,
    age: Number,
    Gender : String,
    User_Name : String,
    Email : String,
    Password : String
})
const userschema =  new mongoose.Schema({
    Name : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        min:18
    },
    Gender : {
        type: String,
        required : true
    },
    User_Name : {
        type: String,
        required : true
    },
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
    App : appschema
},{versionKey : false});
const schemaa =  mongoose.model("user",userschema);
export default schemaa