

import express from 'express';
const route = express.Router();



route.post("/login" , loginController);
route.post("/register" , registerController);