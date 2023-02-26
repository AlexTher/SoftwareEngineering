const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../../models/Student');



/* 
I have no idea where everything should be or what
should go where to make it organized; for the moment
I'll make what I make as I go 
*/


// gets all students
// router.get('/all', async (req, res) => {
//     try{
//         const students = await Student.find();
//         res.json(posts);
//     } catch(err) {
//         res.json({ message: err });
//     }
// });

// create a new student
router.post('/register', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // const student = new Student({
    //     user_id: req.body.id,
    //     name: req.body.name,
    //     email: req.body.email
    // });
    // try {
    //     const savedStudent = await student.save();
    //     res.json(savedStudent);
    // } catch(err) {
    //     res.json({ message: err });
    // }
});

// // get specific student
// router.get('/:studentID', async (req, res) => {
//     const student = Student.findById(req.params.studentID);
//     try {
//         res.json(student);
//     } catch(err) {
//         res.json({ message: err });
//     }
// });


module.exports = router;