const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = new User({ email, password, username });
    await user.save(err => {
      if (err) console.log('Something went wrong saving the user!', err);
    });
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token, username });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  User.findOne({ email }, (err, user) => {
    if (!user) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }

    try {
      user.comparePassword(password);
      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      res.send({ token });
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  });
});

module.exports = router;
