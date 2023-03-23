const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule'},
    semester: { year: { type: Number }, season: { type: String, enum: ['Spring', 'Fall']}},
});

module.exports = mongoose.model('Class', classSchema);