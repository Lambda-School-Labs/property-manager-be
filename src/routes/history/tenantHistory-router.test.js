const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
const Reset = require('../dbReset.js');

// content used for tests

describe('Properties Routes', () => {

beforeEach(async () => {
  await Reset.dbReset();
})

})