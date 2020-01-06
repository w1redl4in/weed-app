const mongoose = require('mongoose');

const WeedSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Weed',WeedSchema, 'Weed');