const express = require('express');
var router = express.Router();
const Subject = require('../../models/Subject');
const mongoose = require('mongoose');

// Define the POST / route to add a new class
router.post('/', async (req, res) => {
    try {
        const { className, classID, pathways, department, credits, description } = req.body;

        // Create a new Class object
        const newSubject = await addSubject(className, classID, pathways, department, credits, description)

        // Return a success response
        res.redirect('/admin/dashboard')
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
// Define the addSubject function to add a new subject
async function addSubject(className, classID, pathways, department, credits, description) {
    try {
        // Create a new Subject object
        const newSubject = new Subject({
            className, classID, pathways, department, credits, description
        });

        // Save the new class to the database
        await newSubject.save();

        // Return the new class object
        return newSubject;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to add subject');
    }
}

module.exports = router;