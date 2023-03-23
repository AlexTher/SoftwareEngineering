const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule'},
});

module.exports = mongoose.model('Class', classSchema);