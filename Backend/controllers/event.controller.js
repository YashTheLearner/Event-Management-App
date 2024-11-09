import Event from '../models/event.model.js';
import userModel from '../models/app.model.js';

// Controller to handle event creation
export const createEvent = async (req, res) => {
    const { title, description, date, location, Mode } = req.body;

    try {
        // Check if all required fields are provided
        if (!title || !description || !date || !location || !Mode) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        // Create a new event instance
        const newEvent = new Event({
            title,
            description,
            date,
            location,
            Mode,
            createdBy: req.user.id // Assuming req.user.id is the authenticated user's ID
        });

        // Save the event to the database
        const savedEvent = await newEvent.save();

        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
