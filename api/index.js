import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

// listen port no.
app.listen(3000, () => {
    console.log("server is running on port number 3000")
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)