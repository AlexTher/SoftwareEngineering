const express = require('express');
var router = express.Router();
const Class = require('../../models/Class');
const mongoose = require('mongoose');

router.get('/classes', async (req, res, next) => {
    try {
        const query = req.query;
        const filter = {};
        if (query.subject) {
            filter.subject = query.subject;
        }
        if (query.teacher) {
            filter.teacher = query.teacher;
        }
        if (query.students) {
            filter.students = { $all: query.students };
        }
        if (query.room) {
            filter.room = query.room;
        }
        if (query.schedule) {
            filter.schedule = query.schedule;
        }
        if (query.semester) {
            filter.semester = query.semester;
        }
    
        const classes = await Class.find(filter)
            .populate('subject')
            .populate('teacher')
            .populate('students')
            .populate('room')
            .populate('schedule')
            .exec();
    
        res.json(classes);
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