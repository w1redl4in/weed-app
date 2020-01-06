const mongoose = require('mongoose');

const WeedSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  batata: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('Weed', WeedSchema, 'Weed');
