import express from 'express';
import { signin, signup } from "../controllers/auth.controller.js";


const router = express.Router();
router.post("/signup", signup);

export default router;