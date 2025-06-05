
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: String,
  question: String,
  userName: String,
  userId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
