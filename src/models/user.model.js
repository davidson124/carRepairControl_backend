import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    pasword: {
        type: String,
        require: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    isActive: {
        type: Boolean,
        default: true
    },
},
{
    timestamps: true
});

export default mongoose.model('User', UserSchema);