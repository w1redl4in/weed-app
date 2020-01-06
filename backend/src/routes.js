const api = require('../src/controllers/weedController');

module.exports = app => {
  app.route('/save').post(api.save);
  app.route('/getAll').get(api.getAll);
  app.route('/delete/:id').delete(api.delete);
  app.route('/getOne/:id').get(api.getOne);
};
