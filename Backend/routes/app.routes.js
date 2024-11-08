

import express from 'express';
import {loginUser , registerUser } from "../controllers/app.controllers.js"
const route = express.Router();



route.post("/login" , loginUser);
route.post("/register" , registerUser);
export default route