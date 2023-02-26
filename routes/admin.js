const express = require('express');
const router = express.Router();

router.get('/create-student', (req, res) => {
    res.render('create_student');
});

module.exports = router;