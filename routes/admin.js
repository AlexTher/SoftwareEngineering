const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');

router.get('/dashboard', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/dashboard', { user: req.session.user });
})

router.get('/create-user', restrictAccess(roles.ADMIN), (req, res) => {
    res.render('admin/create-user');
});

module.exports = router;