// routes/admin.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Invalid username or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

  const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
