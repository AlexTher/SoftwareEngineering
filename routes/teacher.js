const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');

router.get('/dashboard', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/dashboard', { user: req.session.user });
})

//These are the routes for the admin pages

router.get('/calendar', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/calendar',{text: 'Hey'});
});

router.get('/classes', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/classes');
});

router.get('/users', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/users');
});

router.get('/registration', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/registration');
});

router.get('/search', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/search');
});

module.exports = router;