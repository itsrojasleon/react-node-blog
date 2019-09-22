const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Blog = mongoose.model('Blog');

const router = express.Router();

router.use(requireAuth);

router.get('/blogs', async (req, res) => {
  if (req.user) {
    const blogs = await Blog.find({ userId: req.user._id });
    if (blogs) res.send(blogs);
  }
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

router.delete('/blogs/:id', (req, res) => {
  const { id } = req.params;

  try {
    Blog.deleteOne({ _id: id }, err => {
      if (err) {
        console.log('Backend', err);
      }
    });
  } catch (err) {
    res.status(422).send({ err });
  }
});

router.put('/blogs', async (req, res) => {
  const { id, title, content, image } = req.body;
  try {
    let blog = await Blog.findOne({ _id: id });

    await Blog.updateOne({ _id: id }, { _id: id, title, content, image });
    await blog.save();
  } catch (err) {
    res.status(422).send({ err });
  }

  // try {
  //   Blog.findByIdAndUpdate({ _id: id }, err => console.log(err));
  // } catch (err) {
  //   console.log(err);
  // }
});

module.exports = router;
