/**
 * Authorizer function tests.
 *
 * Generated by serverless-mocha-plugin.
 *
 * @module tests/functions/authorizer
 */

const mochaPlugin = require('serverless-mocha-plugin');

// const [jwtToken] = require(`${__dirname}/jwt-token.json`); // ["jwt-or-id-token"]

const wrapped = mochaPlugin.getWrapper('authorizer', '/service/functions/authorizer.js', 'handler');
const { expect } = mochaPlugin.chai;

const cognito = require('../cognito');

describe('authorizer', () => {
  before(() => cognito.create());

  it('should not authorize a user without a token', async () => {
    const res = await wrapped.run({
      headers: {}
    });

    expect(res).to.equal('Unauthorized');
  }).timeout(30000);

  it('should not authorize a user with an invalid a token', async () => {
    const res = await wrapped.run({
      headers: {
        Authorization: 'im-invalid-lol'
      }
    });

    expect(res).to.equal('Unauthorized');
  }).timeout(30000);

  it('should authorize a user with a valid a token', async () => {
    const authData = await cognito.getAuthData();

    const { jwtToken } = authData.idToken;

    const res = await wrapped.run({
      headers: {
        Authorization: jwtToken
      }
    });

    expect(res).to.not.equal('Unauthorized');
    expect(res.principalId).to.be.a('string');
    expect(res.context).to.be.an('object');
    expect(res.context.data).to.be.a('string');
  }).timeout(30000);

  after(() => cognito.cleanup());
});
