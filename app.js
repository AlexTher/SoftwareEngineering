const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Set view engine
app.set('view engine', 'ejs');

// Routers
var loginRouter = require('./routes/login');

// Routes
app.use('/', loginRouter);

// Connect to database
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DB_CONNECTION_URL, 
    () => console.log('Connected to database')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));