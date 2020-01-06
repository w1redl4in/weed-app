const Weed = require('../models/weed');

const api = {};

api.save = async function(req, res) {
  try {
    const weed = await Weed.create(req.body);

    return res.json(weed);
  } catch (error) {
    return res.send(`não sei ${error}`);
  }
};
api.getAll = async function(req, res) {
  const weed = await Weed.find({});

  return res.json(weed);
};
api.delete = async function(req, res) {
  const weed = await Weed.findByIdAndDelete(req.params.id);

  return res.json(weed);
};
api.getOne = async function(req, res) {
  const weed = await Weed.findById(req.params.id);

  return res.json(weed);
};
module.exports = api;
