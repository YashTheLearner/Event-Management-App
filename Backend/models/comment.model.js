import mongoose from "mongoose";
import User from './app.model.js' // Import User model
import Event from "./eventSchema.js" // Import Event model

const commentSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', // Reference to the Event model
    required: true
  },
  text: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
export default Comment
