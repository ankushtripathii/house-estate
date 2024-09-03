import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();

// listen port no.
app.listen(3000, () => {
    console.log("server is running on port number 3000")
});

app.use("/api/user", userRouter)