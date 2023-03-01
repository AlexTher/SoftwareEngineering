const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// parsers
app.use(expressLayouts)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');

// API Routers
const studentAPIRouter = require('./routes/api/students');
const registrationAPIRouter = require('./routes/api/register');

// Routes
app.use('/', loginRouter);
app.use('/admin', adminRouter);

// API Routes
app.use('/student', studentAPIRouter);
app.use('/register', registrationAPIRouter);

// Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));

// Get methods

app.get