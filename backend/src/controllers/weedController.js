const Weed = require('../models/weed');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const api = {};

api.save = async function(req, res) {
  try {
    const { name, description } = req.body;
    const { filename: image } = req.file;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, 'resized', image));

    fs.unlinkSync(req.file.path);

    const weed = await Weed.create({
      name,
      description,
      image,
    });

    return res.json(weed);
  } catch (error) {
    return res.send(error);
  }
};

api.getAll = async function(req, res) {
  try {
    const weed = await Weed.find();
    return res.json(weed);
  } catch (error) {
    return res.send(error);
  }
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
