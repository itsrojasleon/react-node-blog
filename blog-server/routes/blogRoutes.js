const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Blog = mongoose.model('Blog');

const router = express.Router();

router.use(requireAuth);

router.get('/blogs', async (req, res) => {
  const blogs = await Blog.find({ userId: req.user._id });

  res.send(blogs);
});

router.post('/blogs', async (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content) {
    return res
      .status(422)
      .send({ error: 'You must provide a title and a content' });
  }

  try {
    const blog = new Blog({ title, content, userId: req.user._id, image });
    blog.save(err => {
      if (err) console.log(err);
    });
    res.send(blog);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});
module.exports = router;
