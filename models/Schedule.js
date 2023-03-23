const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    classTimes: [{
        day: { type: String, enum: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'] },
        startTime: { type: String },
        endTime: { type: String }
    }]
});

module.exports = mongoose.model('Schedule', scheduleSchema);