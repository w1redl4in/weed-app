const Weed = require('../models/weed');

const api = {};

api.test = function(req, res) {
  const weed = new Weed();
  weed.name = req.body.name;
  weed.save(function(error) {
    if (error) {
      res.send(error);
    } else {
      res.send('saved');
    }
  });
};

module.exports = api;
