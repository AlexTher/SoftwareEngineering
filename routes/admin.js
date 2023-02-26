const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/adminAuth');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('admin/dashboard');
})

router.get('/create-user', isAdmin, (req, res) => {
    res.render('admin/create-user');
});

module.exports = router;