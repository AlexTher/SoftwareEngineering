const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Admin', AdminSchema);[]