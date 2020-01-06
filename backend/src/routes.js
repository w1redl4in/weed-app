const api = require('../src/controllers/weedController');

module.exports = app => {
  app.route('/test').post(api.test);
};
