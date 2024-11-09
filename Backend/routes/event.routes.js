import express from 'express';
import requireAuth from '../middleware/requireAuth.js'; // Middleware for authentication
import { createEvent } from '../controllers/event.controller.js'; // Import controller

const router = express.Router();

// Route for creating an event
router.post('/create', requireAuth, createEvent);

export default router;
