import mongoose from "mongoose";
import userModel from "./app.model.js";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Mode: {
    type: String,
    required:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true,
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model (optional, if you want to track attendees)
  }],
  // Add any other event-related fields as necessary (e.g., event type, image URL)
});

const Event = mongoose.model('Event', eventSchema);
export default Event