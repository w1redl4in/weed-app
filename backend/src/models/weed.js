const mongoose = require('mongoose');

const WeedSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
});

module.exports = mongoose.model('Weed', WeedSchema);
