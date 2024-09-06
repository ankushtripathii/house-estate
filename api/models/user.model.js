import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    avatar: {
        type: 'string',
        default: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;