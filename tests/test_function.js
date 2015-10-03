var expect = require('expect'),
    lambda = require('lambda-wrapper'),
    lambdaFunc = require('../src/index.js');

lambda.init(lambdaFunc);

describe('lambda-skeleton', function() {
    it('Returns the key1 of the input', function(done) {
        lambda.run({
            key1: 'foobar'
        }, function(error, response) {
            if (error) {
                return done(error);
            }
            expect(response.key1).toMatch(/foobar/);
            done();
        });
    });

    it('Returns an error if key1 is missing', function(done) {
        lambda.run({
            key2: 'foobar'
        }, function(error, response) {
            expect(error.message).toMatch(/.*missing.*/);
            done();
        });
    });
});
