const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../../models/Student');
const { User } = require('../../models/User');



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
    try {
        // Get user input from registration form
        const { name, ID, email, password, role } = req.body;
    
        // Add user to database
        const savedUser = await addUser(name, ID, email, password, role);
    
        // Redirect to login page
        res.redirect('/');
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
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

async function addUser(name, ID, email, password, role) {
    const user = new User({name, ID, email, password, role });
    const savedUser = await user.save();
    return savedUser;
}

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