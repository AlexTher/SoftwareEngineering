const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    building: [{ type: String, enum: ['Dicke Hall', 'Halsell Center', 'Chapman Center', 'CSI', 'Marrs McLean', 'Coates Library', 'Laurie Auditorium', 'Smith Music', 'Ruth Taylor Theater', 'Coates Student Center', 'Bell Athletic Center'] }],
    number: { type: Number, required: true },
    capacity: { type: Number, required: true },
    description: {type: String}
});

module.exports = mongoose.model('Room', roomSchema);