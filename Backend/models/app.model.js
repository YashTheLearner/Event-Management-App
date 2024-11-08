//logic to create user collection and logic to define user schema

import mongoose from "mongoose";

const userschema =  new mongoose.Schema({
    name : {
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
    age:{
        type: Number,
        required : true
    },
    userBio:{
        type: String,
        required : false
    },
    userLinkedIn:{
        type: String,
        required : false
    },
    userInsta:{
        type: String,
        required : false
    },
    noOfCreated:{
        type: Number,
        default: 0,
        required : false
    },
    noOFHosted:{
        type: Number,
        default: 0,
        required : false
    },
    username:{
        type: String,
        required : true
    }
},{versionKey : false});

const userModel =  mongoose.model("User",userschema);
export default userModel