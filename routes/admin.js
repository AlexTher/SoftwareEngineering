const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');
const Schedule = require('../models/Schedule');
const Subject = require('../models/Subject');

router.get('/admin/dashboard', /*restrictAccess(roles.ADMIN),*/ (req, res) => {
    res.render('/users/admin/dashboard', { user: req.session.user });
})


//These are the routes for the admin pages
router.get('/admin/create-user', /*restrictAccess(roles.ADMIN),*/ (req, res) => {
    res.render('/users/admin/create-user');
});
router.get('/admin/create-class', /*restrictAccess(roles.ADMIN),*/ async (req, res) => {
    try {
        // Fetch all schedules from the database
        const schedules = await Schedule.find();
        const departments = await Subject.distinct('department');
        //const subjects = await Subject.find({ department: req.query.department });

        // Render the class creation form template and pass the schedules variable
        res.render('/users/admin/create-class', { schedules, departments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
router.get('/admin/create-subject', /*restrictAccess(roles.ADMIN),*/ async (req, res) => {
    try {
        // Fetch all schedules from the database
        const departments = await Subject.distinct('department');

        // Render the class creation form template and pass the schedules variable
        res.render('/users/admin/create-subject', { departments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
router.get('/admin/calendar', /*restrictAccess(roles.ADMIN),*/ (req, res) => {
    res.render('/users/admin/calendar',{text: 'Hey'});
});
router.get('/admin/classes', /*restrictAccess(roles.ADMIN),*/ (req, res) => {
    res.render('/users/admin/classes');
});
router.get('/admin/users', /*restrictAccess(roles.ADMIN),*/ (req, res) => {
    res.render('/users/admin/users');
});

module.exports = router;