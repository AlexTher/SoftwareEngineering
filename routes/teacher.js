const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');

router.get('/dashboard', restrictAccess(roles.TEACHER), (req, res) => {
    res.render('teacher/dashboard', { user: req.session.user });
})

//other routes go here

module.exports = router;