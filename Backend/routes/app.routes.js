
import requireAuth from '../middleware/requireAuth.js';
import express from 'express';
import {loginUser , registerUser,getUser } from "../controllers/app.controllers.js"
import { getAttendedEvents , getHostedEvents  } from '../controllers/getUserEvents.js';

const route = express.Router();



route.post("/login" , loginUser);
route.post("/register" , registerUser);
route.get("/getuser", requireAuth, getUser)
route.get('/:userId/attendedevents', requireAuth, getAttendedEvents);
route.get('/:userId/hostedevents', getHostedEvents);
router.get('/avatar', requireAuth, getUserAvatar);
export default route