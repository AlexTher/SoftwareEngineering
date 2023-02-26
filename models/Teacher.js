const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    teacherID: {
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

module.exports = mongoose.model('Teacher', TeacherSchema);