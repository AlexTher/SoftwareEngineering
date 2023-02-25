const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', StudentSchema);