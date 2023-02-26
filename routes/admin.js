const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/adminAuth');

router.get('/dashboard', isAdmin, (req, res) => {
    res.render('admin/dashboard');
})

router.get('/create-student', isAdmin, (req, res) => {
    res.render('admin/create-student');
});

module.exports = router;