const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    className: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    classID: { type: Number, required: true },
    room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    schedule: [{
        day: { type: String, enum: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'] },
        startTime: { type: String },
        endTime: { type: String }
    }],
    pathways: [{ type: String, enum: ['WC', 'OVC', 'HP', 'UD', 'FL', 'GA', 'DL', 'NS', 'PE', 'FYE', 'CE', 'QR'] }],
    department: [{ type: String, enum: ['Art and Art History', 'Biology', 'Chemistry', 'Classical Studies', 'Communication', 
                                        'Computer Science', 'Economics', 'Education', 'Engineering Science', 'English', 'Geosciences', 
                                        'Health Care Administration', 'History', 'Human Communication and Theatre', 'Mathematics',
                                        'Modern Languages and Literatures', 'Music', 'Philosophy', 'Physics and Astronomy', 'Political Science',
                                        'Psychology', 'Religion', 'Sociology and Anthropology'] }],
    //schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule' }]
    // other fields as needed
    description: [{type: String}]
});

module.exports = mongoose.model('Class', classSchema);