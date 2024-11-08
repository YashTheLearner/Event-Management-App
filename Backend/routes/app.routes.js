
import requireAuth from '../middleware/requireAuth.js';
import express from 'express';
import {loginUser , registerUser,getUser } from "../controllers/app.controllers.js"
const route = express.Router();



route.post("/login" , loginUser);
route.post("/register" , registerUser);
route.get("/getuser", requireAuth, getUser)
export default route