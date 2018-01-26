var myapp = require('../app');
var request = require('supertest');


var registerInfo = {
    	name: "Test",
    	email: "emailtest.com",
    	username: "test",
    	phoneNo: 1233453456,
    	password: "password"
    }
var registerInfoBlank = {
    	name: null,
    	email: null,
    	username: null,
    	phoneNo: null,
    	password: null
    }   


describe('GET /users/login', function() {
  it('respond with json', function(done) {
    request(myapp)
      .get('/users/login')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});



describe("Posting a new user on register page", function (){
  it("posts a new user to /users/register", function(done){
       request(myapp)
      .post("/users/register")
      .send(registerInfo)
      .expect(200, done);
  });
});

describe("Posting a blank user should return 404", function (){
  it("should not post a blank new user to /users/register", function(done){
       request(myapp)
      .post("/users/register")
      .send(registerInfoBlank)
      .expect(404, function (err) {
        done();
      });
  });

});