const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), //or Date.now
  },
});

module.exports = mongoose.model('Article', articleSchema);

//! how To Build A Markdonw blog Using node.js, express, and MongoDB 27:00
