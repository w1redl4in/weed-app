const api = require('./controllers/weedController');

module.exports = app => {
  app.route('/').get(api.test);
};
