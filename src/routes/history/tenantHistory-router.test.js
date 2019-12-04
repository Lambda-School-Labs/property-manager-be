const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
const Reset = require('../dbReset.js');

// content used for tests

describe('Tenant History Routes', () => {

beforeEach(async () => {
  await Reset.dbReset();
})

//#region - READ
describe('get: \'/api/properties/\' endpoint', () => {

  it('should return 200 status', async done => {
    
    const results = await request.get('/api/history/property/1');    
    expect(results.status).toBe(200);
    done();
  })

  it('should return array', async done => {
    
    const results = await request.get('/api/history/property/1');
    const response = await results.body;
  
    expect(Array.isArray(response)).toBe(true);
    done();
  })

  it('should return a length of 1', async done => {
    
    const results = await request.get('/api/history/property/1');
    const response = await results.body;
  
    expect(response).toHaveLength(1);
    done();
  })
})


// #endregion

})