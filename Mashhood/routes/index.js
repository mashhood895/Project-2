
User = require('../controller/User');
module.exports = function(app){
  app.route('/').get(User.login);
  app.route('/login').get(User.login);
  app.route('/register').get(User.register);
  app.route('/feature').get(User.feature);
  app.route('/signup').post(User.signup);
  app.route('/login_user').post(User.login_user);
  app.route('/logout').get(User.logout);
  app.route('/about').get(User.about);
  app.route('/contact').get(User.contact);
  app.route('/appointment').get(User.appointment);
  app.route('/staff').get(User.staff);
  app.route('/pharmacy').get(User.pharmacy);
  app.route('/accounts').get(User.account);
  app.route('/tools').get(User.tools);
  app.route('/patients').get(User.patients);
  app.route('/doctors').get(User.doctors);
  app.route('/contact_send').post(User.contact_send);
  app.route('/booking_send').post(User.booking_send);







  };
