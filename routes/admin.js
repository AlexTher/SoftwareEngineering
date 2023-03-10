const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');

router.get('/dashboard', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/dashboard', { user: req.session.user });
})


//These are the routes for the admin pages
router.get('/create-user', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/create-user');
});
router.get('/calendar', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/calendar',{text: 'Hey'});
});
router.get('/classes', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/classes');
});
router.get('/users', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/users');
});

module.exports = router;