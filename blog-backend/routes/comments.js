const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/authMiddleware');

// Get Comments for a Blog
router.get('/:blogId', async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blogId })
      .populate('author', 'username')
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add Comment
router.post('/:blogId', auth, async (req, res) => {
  try {
    const comment = new Comment({
      blog: req.params.blogId,
      author: req.user.id,
      content: req.body.content
    });
    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;