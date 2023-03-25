const express = require('express');
const router = express.Router();
const path = require('path');
//const mime = require('mime');
const fs = require('fs');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname,'..', '..', 'public', 'javascripts', 'subject-populator.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});

module.exports = router;