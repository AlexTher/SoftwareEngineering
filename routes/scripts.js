const express = require('express');
const router = express.Router();
const path = require('path');
//const mime = require('mime');
const fs = require('fs');

router.get('/subject-populator.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'javascripts', 'subject-populator.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});

router.get('/class-populator.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'javascripts', 'class-populator.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});

router.get('/student-class-registration.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'javascripts', 'student-class-registration.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});

router.get('/student-class-unregistration.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'javascripts', 'student-class-unregistration.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});

router.get('/admin-audit-populator.js', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'javascripts', 'admin-audit-populator.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.set('Content-Type', 'application/javascript');
    res.send(fileContents);
});


module.exports = router;