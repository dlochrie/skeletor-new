/**
 * Main router module.
 * Add your routes here.
 */
module.exports = function(app) {
  // TODO: Maybe just loop through controllers??
  var dir = app.get('ROOT PATH') + 'app/controllers/',
      main = require(dir + 'main'),
      users = require(dir + 'users'),
      posts = require(dir + 'posts'),
      admin = require(dir + 'admin'),
      adminPosts = require(dir + 'admin/posts');

  /**
   * Public Routes.
   */
  app.get('/', main.index);
  app.get('/about', main.about);
  app.get('/contact', main.contact);
  app.get('/login', main.login);

  /**
   * Public Resources.
   */
  app.resource('posts', posts);

  /**
   * Authenticate all `admin` routes with authentication middleware.
   *
   * TODO: This is a temporary admin check, but it needs to be
   * expanded on and refactored.
   */
  app.all('/admin*', users.authenticate);

  /**
   * Admin Routes.
   * Should be protected by authentication middleware above.
   */
  app.resource('admin', admin);
  app.resource('admin/posts', adminPosts);
  app.get('/admin/posts/:post/delete', adminPosts.delete);
};
