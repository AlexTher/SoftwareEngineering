const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    user_id: {
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