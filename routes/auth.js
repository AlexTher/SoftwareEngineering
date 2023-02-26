const express = require('express');
const bcrypt = require('bcrypt');
const { User, addUser } = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Look up the user by email
  const user = await User.findOne({ email });

  // If the user doesn't exist, return an error
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Check the password hash to authenticate the user
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Redirect the user to the appropriate dashboard based on their role
  if (user.role === 'student') {
    return res.redirect('/student-dashboard');
  } else if (user.role === 'teacher') {
    return res.redirect('/teacher-dashboard');
  } else if (user.role === 'admin') {
    return res.redirect('/admin-dashboard');
  }
});
