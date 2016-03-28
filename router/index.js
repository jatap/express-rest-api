// Each file belongs to a route
module.exports = function (app) {
  app.use('/', require('./homepage'));
}
