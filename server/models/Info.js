const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
  lastMatch: {
    type: String,
  },
});

module.exports = Info = mongoose.model('info', InfoSchema);
