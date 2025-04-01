import express, { Router } from "express";
import { userLogin, userSignUp } from "../controllers/userController";


const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogin)

export {router as userRoute};