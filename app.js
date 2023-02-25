const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Set view engine
app.set('view engine', 'ejs');

// Routers
var loginRouter = require('./routes/login');

// API Routers
var studentAPIRouter = require('./routes/api/students');

// Routes
app.use('/', loginRouter);

// API Routes
app.use('/student', studentAPIRouter);

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));