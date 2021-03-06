var request = require('supertest'),
    bulaTest = app.test,
    seed = new bulaTest.seed(app, 'user');


describe('Users Controller', function() {
  describe('when not logged in', function() {
    beforeEach(function(done) {
      seed.setup(done);
    });

    afterEach(function(done) {
      seed.teardown(done);
    });

    it('should show the users index', function(done) {
      request(app)
          .get('/users')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            res.text.should.containEql('Member Since');
            res.text.should.containEql('joe tester');
            res.text.should.containEql('johnny edit');
            done();
          });
    });

    it('should show a user\'s profile page',
        function(done) {
         request(app)
          .get('/users/joe-tester')
          .expect(200)
          .end(function(err, res) {
           if (err) return done(err);
           res.text.should.containEql('joe tester\'s Profile');
           done();
         });
       });
  });

  describe('when logged in as the user', function() {
    beforeEach(function(done) {
      var session = app.request.session = new bulaTest.authenticate();
      session.logged_in.should.be.true;
      session.passport.should.be.an.Object;
      done();
    });

    it('should show the logged in user\'s page with custom actions',
       function(done) {
         // TODO: Implement.
         done();
       });

    it('should show anothers user\'s page and restrict actions',
       function(done) {
         // TODO: Implement.
         done();
       });
  });
});
