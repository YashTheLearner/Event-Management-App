//logic to create user collection and logic to define user schema

import mongoose from "mongoose";

const userschema =  new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        min:18
    },
    gender : {
        type: String,
        required : true
    },
    userName : {
        type: String,
        required : true
    },
    email : {
        type : String,
        minLength : 11,
        lowercase : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    
},{versionKey : false});

const userModel =  mongoose.model("User",userschema);
export default userModel