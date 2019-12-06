const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
const Reset = require('../dbReset.js');

// paths
const baseRoute = '/api/history/';
let path = baseRoute + '';

// content used for tests

describe('Tenant History Routes', () => {

  beforeEach(async () => await Reset.dbReset());
  afterEach(async done => done());

  //#region - READ

  // GET: '/api/history/property' - Get all tenant history results for property, by property id.
  path = baseRoute + 'property/';

  describe('GET: \'' + path + ':id\' endpoint', () => {

    // expected input
    const id = 1
    path = path + id

    it('should return 200 status', async () => {   
      try {   
        // call function
        const results = await request.get(path);  
        // expected results
        expect(results.status).toBe(200);
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return a length of 1', async () => { 
      try {   
        // call function
        const results = await request.get(path);
        const response = await results.body;   
        // expected results 
        expect(response).toHaveLength(1);
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return array', async () => {
      try {
        // call function
        const results = await request.get(path);
        const response = await results.body;   
        // expected results 
        expect(Array.isArray(response)).toBe(true);
        // catch error
      } catch(err) { console.log(err) }
    })
  })

  // #endregion

})