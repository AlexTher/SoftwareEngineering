const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    className: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    classID: { type: Number, required: true },
    schedule: [{
        day: { type: String, enum: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'] },
        startTime: { type: String },
        endTime: { type: String }
      }]
    //schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule' }]
    // other fields as needed
});

module.exports = mongoose.model('Class', classSchema);