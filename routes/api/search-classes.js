const express = require('express');
var router = express.Router();
const Class = require('../../models/Class');
const mongoose = require('mongoose');

router.get('/classes', async (req, res, next) => {
    try {
        const query = req.query;

        //debug
        console.log("===========QUERY==========");
        console.log(req.query);
        //end-debug

        const filter = {};
        if (query.department) {
            filter['subject.department'] = query.department;
        }
        if (query.classID) {
            filter['subject.classID'] = query.classID;
        } else if (query.inputLevel) {
            const firstNumMatch = new RegExp(`^${query.inputLevel}`);
            filter['subject.classID'] = { $regex: firstNumMatch };
        }
        if (query.subject) {
            filter['subject.className'] = { $regex: query.subject, $options: 'i' };
        }
        if (query.pathway) {
            filter['subject.pathways'] = query.pathway;
        }
        if (query.credits) {
            filter['subject.credits'] = query.credits;
        }
        // if (query.teacher) {
        //     filter.teacher = query.teacher;
        // }
        // if (query.room) {
        //     filter.room = query.room;
        // }
        // if (query.schedule) {
        //     filter.schedule = query.schedule;
        // }
        // if (query.semester) {
        //     filter.semester = query.semester;
        // }
    
        const classes = await Class.find(filter)
            .populate('subject')
            .populate('teacher')
            .populate('students')
            .populate('room')
            .populate('schedule')
            .exec();

        //debug
        console.log("====Output====");
            console.log(classes[0].subject); // Check if subject is properly populated
            console.log(classes[0].teacher); // Check if teacher is properly populated
            console.log(classes[0].students); // Check if students is properly populated
            console.log(classes[0].room); // Check if room is properly populated
            console.log(classes[0].schedule); // Check if schedule is properly populated
        console.log("====Output-End====");
        //end-debug

        res.render('partials/adminClassEntry', {classes:classes}, function(err,html) {
            res.send(html);
        });
        
    } catch (err) {
      next(err);
    }
});
//GET route for getting subjects from department
router.get('/subjects', async (req, res) => {
    try {
      const { department } = req.query;
      const subjects = await Subject.find({ department });
      res.json(subjects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;