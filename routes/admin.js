const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');
const Schedule = require('../models/Schedule');
const Subject = require('../models/Subject');
const Timestamp = require('../models/Timestamp');

router.get('/dashboard', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/dashboard', { user: req.session.user });
})

//These are the routes for the admin pages
router.get('/create-user', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/create-user');
});

router.get('/create-class', restrictAccess(roles.ADMIN), async (req, res) => {
    try {
        // Fetch all schedules from the database
        const schedules = await Schedule.find();
        const departments = await Subject.distinct('department');

        // Render the class creation form template and pass the schedules variable
        res.render('admin/create-class', { schedules, departments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/create-subject', restrictAccess(roles.ADMIN), async (req, res) => {
    try {
        // Fetch all schedules from the database
        const departments = await Subject.distinct('department');

        // Render the class creation form template and pass the schedules variable
        res.render('admin/create-subject', { departments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/calendar', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/calendar',{text: 'Hey'});
});

router.get('/classes', restrictAccess(roles.ADMIN), async (req, res) => {
    try {
        // Get stuff from database
        const schedules = await Schedule.find();
        const subjects = await Subject.find();
        const departments = await Subject.distinct('department');
        const pathways = await Subject.distinct('pathways');
        const credits = await Subject.distinct('credits')
        res.render('classes', { schedules, subjects, departments, pathways, credits, userRole: roles.ADMIN});
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/users', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/users');
});

router.get('/audit', restrictAccess(roles.ADMIN), async (req,res) => {

    function auditValueAndDisplay(list) {
        const formattedList = list.map((item) => {
          return {
            value: item,
            display: item.split("_").map((word) => {
              return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(" ")
          }
        });
        return formattedList;
    }

    const auditTypes = auditValueAndDisplay(Timestamp.schema.paths.description.enumValues);
    console.log(auditTypes);
    res.render('admin/audit', {auditTypes});
})

module.exports = router;