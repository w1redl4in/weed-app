const mongoose = require('mongoose');

const WeedSchema = new mongoose.Schema({
  image: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

module.exports = mongoose.model('Weed', WeedSchema);
