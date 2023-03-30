const express = require('express');
const router = express.Router();
const { roles, restrictAccess } = require('../functions/authentication/auth');
const Schedule = require('../models/Schedule');
const Subject = require('../models/Subject');
const User = require('../models/User');

//remember, the route to this http request is student/dashboard because in app.js we specify that all routes starting with 'student' go through this file
router.get('/dashboard', restrictAccess(roles.STUDENT), (req, res) => {
    res.render('student/dashboard', { user: req.session.user });
});

router.get('/calendar', restrictAccess(roles.STUDENT), (req, res) => {
    res.render('student/calendar', { user: req.session.user });
});

router.get('/classes', restrictAccess(roles.STUDENT), async (req, res) => {
    try {
        const userId = req.session.user._id
        // Get stuff from database
        const user = await User.findById(userId).populate('class').lean().exec();
        const registeredClasses = user.class;
        res.render('student/registered-classes', {registeredClasses});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/registration', restrictAccess(roles.STUDENT), (req, res) => {
    res.render('student/registration', { user: req.session.user });
});

router.get('/search', restrictAccess(roles.STUDENT), async (req, res) => {
    try {
        // Get stuff from database
        const schedules = await Schedule.find();
        const subjects = await Subject.find();
        const departments = await Subject.distinct('department');
        const pathways = await Subject.distinct('pathways');
        const credits = await Subject.distinct('credits')
        res.render('classes', { schedules, subjects, departments, pathways, credits, userRole: roles.STUDENT});
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/wishlist', restrictAccess(roles.STUDENT), async (req, res) => {
    try {
        const userId = req.session.user._id
        // Get stuff from database
        const user = await User.findById(userId).populate('wishlist').lean().exec();
        const wishlist = user.wishlist;
        // user.wishlist.forEach((classId) => {
        //     const classObj = classes.find((c) => c.id.equals(classId));
        //     if (classObj) {
        //         populatedWishlist.push(classObj);
        //     }
        // });

        //console.log(wishlist);
        res.render('student/wishlist', {wishlist});
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Other routes go below this

module.exports = router;