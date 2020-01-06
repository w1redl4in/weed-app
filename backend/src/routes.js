const api = require('./controllers/weedController');

module.exports = app => {
  app.route('/test').post(api.test);
};
