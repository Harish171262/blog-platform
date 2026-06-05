const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const auth = require('../middleware/authMiddleware');

// Get All Blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'username')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Blog
router.post('/', auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content, author: req.user.id });
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Like Blog
router.put('/:id/like', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.likes.includes(req.user.id)) {
      blog.likes = blog.likes.filter(id => id.toString() !== req.user.id);
    } else {
      blog.likes.push(req.user.id);
    }
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;