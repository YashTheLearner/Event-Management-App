import express from 'express';
import { createEvent, getAllEvents } from '../controllers/event.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// Route to create a new event
router.post('/create',requireAuth , createEvent);

// Route to get all events
router.get('/all', getAllEvents);

export default router;
