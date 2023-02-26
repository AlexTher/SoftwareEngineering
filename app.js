const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routers
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');

// API Routers
var studentAPIRouter = require('./routes/api/students');

// Routes
app.use('/', loginRouter);
app.use('/admin', adminRouter);

// API Routes
app.use('/student', studentAPIRouter);

// Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));