const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ID: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'admin'], required: true, default: 'student' },
    class: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class', // reference to the Class model
    }],
})

// async function addUser(name, ID, email, password, role) {
//     const user = new User({name, ID, email, password, role });
//     const savedUser = await user.save();
//     return savedUser;
// }

module.exports = mongoose.model('User', UserSchema);
//module.exports = { User, addUser };
//module.exports = { User };