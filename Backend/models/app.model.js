import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      minLength: 11,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    userBio: {
      type: String,
      required: false,
    },
    userLinkedIn: {
      type: String,
      required: false,
    },
    userInsta: {
      type: String,
      required: false,
    },
    noOfAttended: {
      type: Number,
      default: 0,
      required: false,
    },
    noOfHosted: {
      type: Number,
      default: 0,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
    eventPreferences: {
      type: [String], // Array of strings
      enum: ["Educational", "Music", "Cultural", "Spiritual", "Corporate"], // List of allowed values
      required: false,
    },
  },
  { versionKey: false }
);

const userModel = mongoose.model("User", userschema);
export default userModel;
