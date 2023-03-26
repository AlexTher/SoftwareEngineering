const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');

//remember, the route to this http request is student/dashboard because in app.js we specify that all routes starting with 'student' go through this file
router.get('/dashboard', restrictAccess(roles.STUDENT), (req, res) => {
    res.render('student/dashboard', { user: req.session.user });
})

// Other routes go below this

module.exports = router;