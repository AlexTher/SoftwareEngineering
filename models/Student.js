const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    student_id: mongoose.ObjectId,
    name: {
        first: String,
        last: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Students', StudentSchema)