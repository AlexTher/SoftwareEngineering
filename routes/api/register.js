const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { User } = require('../../models/User');
const bcrypt = require('bcrypt');

//const salt = await bcrypt.genSalt(10);

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        // Get user input from registration form
        const { name, ID, email, password, role } = req.body;
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Add user to database
        const savedUser = await addUser(name, ID, email, hashedPassword, role);
    
        // Redirect to login page
        res.redirect('/');
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

async function addUser(name, ID, email, password, role) {
    const user = new User({name, ID, email, password, role });
    const savedUser = await user.save();
    return savedUser;
}

module.exports = router;