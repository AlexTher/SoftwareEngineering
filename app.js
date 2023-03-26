const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const path = require('path');
const mime = require('mime');
const fs = require('fs');

//import bootstrap from 'bootstrap'
//const bootstrap = require('bootstrap');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// parsers
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/views'));

// app.get('/public/javascripts/subject-populator.js', (req, res) => {
//     const filePath = path.join(__dirname, 'public', 'javascripts', 'subject-populator.js');
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     res.set('Content-Type', 'application/javascript');
//     res.send(fileContents);
// });

// authentication
app.use(session({
    secret: 'mysecret',
    resave: false, // do not save the session to store if it hasn't been modified
    saveUninitialized: false, // do not save the session if it hasn't been initialized
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', './layouts/layout');

// Routers
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student');
const teacherRouter = require('./routes/teacher');
const subjectPopulatorRoute = require('./routes/scripts/subject-populator');

// API Routers
const studentAPIRouter = require('./routes/api/students');
const registrationAPIRouter = require('./routes/api/register');
const classAPIRouter = require('./routes/api/add-classes');
const subjectAPIRouter = require('./routes/api/add-subjects');

// Routes
app.use('/', loginRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/public/javascripts/subject-populator.js', subjectPopulatorRoute);

// API Routes
app.use('/student', studentAPIRouter);
app.use('/register', registrationAPIRouter);
app.use('/add-classes', classAPIRouter);
app.use('/add-classes/subjects', classAPIRouter);
app.use('/add-subjects', subjectAPIRouter);


//Scheduler Code

// Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));