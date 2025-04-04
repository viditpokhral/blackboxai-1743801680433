require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';

app.use(express.json());

// JWT Authentication Middleware
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Registration endpoint
app.post('/api/register', async (req, res) => {
  // ... existing registration code ...
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  // ... existing login code ...
});

// Protected Profile Endpoints
app.route('/api/profile')
  .get(authenticateJWT, (req, res) => {
    res.json({ 
      message: 'Profile data',
      userId: req.userId
    });
  })
  .put(authenticateJWT, (req, res) => {
    res.json({ 
      message: 'Profile updated',
      userId: req.userId
    });
  });

// Protected Change Password
app.put('/api/change-password', authenticateJWT, (req, res) => {
  res.json({ 
    message: 'Password changed',
    userId: req.userId
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
