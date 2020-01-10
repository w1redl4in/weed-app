const api = require('../src/controllers/weedController');
const express = require('express');
const router = express.Router();
const uploadConfig = require('./config/upload');
const multer = require('multer');
const upload = multer(uploadConfig);

// router.post('/weeds', api.save);
router.post('/weeds', upload.single('image'), api.save);
router.get('/weeds', api.getAll);
router.delete('/weeds/:id', api.delete);
router.get('/weeds/:id', api.getOne);

//add put

module.exports = router;
