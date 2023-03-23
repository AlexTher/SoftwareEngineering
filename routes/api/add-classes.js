const express = require('express');
var router = express.Router();
const Class = require('../../models/Class');
const Subject = require('../../models/Subject');
const mongoose = require('mongoose');

// router.get('/subjects/:department', async (req, res) => {
//     console.log("Made it!")
//     try {
//       const { department } = req.params;
//       const subjects = await Subject.find({ department });
//       res.json(subjects);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
router.get('/subjects', async (req, res) => {
    console.log("Made it!")
    try {
      const { department } = req.query;
      const subjects = await Subject.find({ department });
      res.json(subjects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
});
// Define the POST / route to add a new class
router.post('/', async (req, res) => {
    try {
        const { subject, schedule } = req.body;

        // Create a new Class object
        const newClass = await addClass(subject, schedule)

        // Return a success response
        res.redirect('/admin/dashboard')
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
// Define the addClass function to add a new class
async function addClass(subject, schedule) {
    try {
        // Create a new Class object
        const newClass = new Class({
            subject, schedule
        });

        // Save the new class to the database
        await newClass.save();

        // Return the new class object
        return newClass;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to add class');
    }
}

module.exports = router;