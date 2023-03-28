const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    // Construct the file path to the JavaScript file
    const filePath = path.join(__dirname,'..', '..', 'public', 'javascripts', 'subject-populator.js');

    // Read the contents of the JavaScript file into memory
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Set the response content type to "application/javascript"
    res.set('Content-Type', 'application/javascript');

    // Send the contents of the JavaScript file as the response
    res.send(fileContents);
});

module.exports = router;