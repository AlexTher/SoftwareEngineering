const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    className: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    classID: { type: Number, required: true },
    department: {type: String},
    schedule: [{
        day: { type: String, enum: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'] },
        startTime: { type: String },
        endTime: { type: String }
    }],
    pathways: [{ type: String, enum: ['WC', 'OVC', 'HP', 'UD', 'FL', 'GA', 'DL', 'NS', 'PE', 'FYE', 'CE', 'QR'] }],
    //schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule' }]
    // other fields as needed
    description: [{type: String}]
});

module.exports = mongoose.model('Class', classSchema);