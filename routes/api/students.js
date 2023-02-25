var mongoose = require('mongoose');
var router = express.Router();
var Student = require('../../models/Student');

// gets all students
router.get('/all', async (req, res) => {
    try{
        const students = await Student.find();
        res.json(posts);
    } catch(err) {
        res.json({ message: err });
    }
});

// create a new student
router.post('/', async (req, res) => {
    const student = new Student({
        studentID: req.body.studentID,
        name: req.body.name,
        email: req.body.email
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch(err) {
        res.json({ message: err });
    }
});

// get specific student
router.get('/:studentID', async (req, res) => {
    const student = Student.findById(req.params.studentID);
    try {
        res.json(student);
    } catch(err) {
        res.json({ message: err });
    }
});


module.exports = router;