var should = require('should');
var User = require('../lib/models/user');

var assert = require('assert');


describe('User', function () {

    describe('defaults', function () {

        var user = {};

        before(function () {
            user = new User({email: 'bubu@kuku.com'});
        });

        it('email is bubu@kuku.com', function () {
            user.email.should.equal('bubu@kuku.com');
        });
        it('has an authentication token', function () {
            user.authenticationToken.should.be.defined;
        });
        it('has a pending status', function () {
            user.status.should.equal('pending');
        });
        it('has a created date', function () {
            user.createdAt.should.be.defined;
        });
        it('has a signInCount of 0', function (){
            user.signInCount.should.equal(0);
        });
        it('has a lastLogin', function () {
            user.lastLoginAt.should.be.defined;
        });
        it('has currentLogin', function () {
            user.currentLoginAt.should.be.defined;
        });
    });
});