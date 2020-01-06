const api = require('../src/controllers/weedController');
const express = require('express');
const router = express.Router();
  
  router.route('/weed')
      .post(api.save);
  router.route('/weeds')
      .get(api.getAll);
  router.route('/weed/:id')
      .delete(api.delete)
      .get(api.getOne);
      //add put

module.exports = router;