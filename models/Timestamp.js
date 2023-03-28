const mongoose = require('mongoose');

const timestampSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now,},
    description: { type: String, enum: ['class_created', 'class_updated', 'student_registered', 'student_unregistered'], required: true }
});

module.exports = mongoose.model('Timestamp', timestampSchema);