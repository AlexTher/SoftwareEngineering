const express = require('express');

const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Routers
var loginRouter = require('./routes/login');

// Routes
app.use('/', loginRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server on port ${PORT}`));