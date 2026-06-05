const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/Blogs'));
app.use('/api/comments', require('./routes/comments'));

// Test Route
app.get('/', (req, res) => {
  res.send('Blog Platform API is Running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });