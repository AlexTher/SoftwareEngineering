const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: String,
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // reference to the User model
    },
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // reference to the User model
    }],
    className: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        //required: true
    },
    endTime: {
        type: Date,
        //required: true
    },
    schedule: {
        type: [String],
        enum: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'],
        required: true
    }
    // other fields as needed
});

module.exports = mongoose.model('Class', ClassSchema);[]