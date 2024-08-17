const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LinkSchema = new Schema({
  long: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Link', LinkSchema);