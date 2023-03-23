const express = require('express');
var router = express.Router();
const Class = require('../../models/Class');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    try {
        const { className, teacher, students, classID, pathways, department } = req.query;
        
        const searchParameters = {};
        if (className) searchParameters.className = { $regex: className, $options: 'i' }; // $regex and $options are used to perform a case-insensitive search using a regular expression
        if (teacher) searchParameters.teacher = teacher;
        if (students) searchParameters.students = students;
        if (classID) searchParameters.classID = classID;
        if (pathways) searchParameters.pathways = { $in: pathways.split(',') }; // $in is used to match any value in an array of values
        if (department) searchParameters.department = department;

        const results = await Class.find(searchParameters);

        //I'm not sure how the data should be returned
        //Looks like the standard is a json, but there's 
        //Probably 
        res.json({success: true, data: results})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'An error occurred' });
    }
});


module.exports = router;