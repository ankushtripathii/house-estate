import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());

// listen port no.
app.listen(3000, () => {
    console.log("server is running on port number 3000")
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message

    });
})