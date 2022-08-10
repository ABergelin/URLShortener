const mongoose = require('mongoose');

// Defining new schema
const urlSchema = new mongoose.Schema({
  urlCode: {
    type: String,
    required: true,
  },
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Url', urlSchema);
