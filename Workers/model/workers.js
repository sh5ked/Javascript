const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required!"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        lowercase: true,
        trim: true,
    },

    phone: {
        type: String, // תוקן מ-Number ל-String
        trim: true
    },

    role: {
        type: String,
        required: [true, "User name is required!"],
        trim: true
    },

    department: {
        type: String,
        required: [true, "department name is required!"],
        trim: true
    }
},
    { timestamps: true }
);

const workers = mongoose.model('workers', userSchema);
module.exports = workers;