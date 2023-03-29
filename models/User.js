const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ID: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'admin'], required: true, default: 'student' },
    class: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class', // reference to the Class model
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class', // reference to the Class model
    }],
})

module.exports = mongoose.model('User', UserSchema);