const express = require('express');
var router = express.Router();
const Class = require('../../models/Class');
const Subject = require('../../models/Subject');
const Timestamp = require('../../models/Timestamp');
const mongoose = require('mongoose');

//GET route for getting subjects from department
router.get('/subjects', async (req, res) => {
    try {
        // Extracts the 'department' value from the query string
        const { department } = req.query;
        // Finds all subjects from the database that match the 'department' value
        const subjects = await Subject.find({ department });
        // Sends the subjects back as a JSON response to the client
        res.json(subjects);
    } catch (err) {
        // If an error occurs, logs the error to the console and sends an error response back to the client
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/all-subjects', async (req, res) => {
    try {
      const subjects = await Subject.find();
      res.json(subjects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
});
// Define the POST / route to add a new class
router.post('/', async (req, res) => {
    try {
        // Extracts the 'subject' and 'schedule' values from the query string
        const { subject, schedule } = req.body;

        // Create a new Class object
        const newClass = await addClass(subject, schedule, req.session.user)

        // Return a success response
        res.redirect('/admin/dashboard')
    } catch (err) {
        // If an error occurs, logs the error to the console and sends an error response back to the client
        console.error(err);
        res.status(500).send('Server error');
    }
});
// Define the addClass function to add a new class
async function addClass(subject, schedule, user) {
    try {
        // Create a new Class object
        const newClass = new Class({
            subject, schedule
        });
        // Create a new Timestamp
        const newTimestamp = new Timestamp({
            user: user._id,
            class: newClass._id,
            description: 'class_created'
        });
        // Save the new Class document and the new Timestamp document to the database
        const savedClass = await newClass.save();
        const savedTimestamp = await newTimestamp.save();

        // Return the ID of the newly created Class document
        return savedClass;
    } catch (err) {
        // If an error occurs, logs the error to the console and sends an error response back to the client
        console.error(err);
        throw new Error('Failed to add class');
    }
}

module.exports = router;