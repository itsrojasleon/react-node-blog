const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
});
mongoose.model('Blog', blogSchema);
