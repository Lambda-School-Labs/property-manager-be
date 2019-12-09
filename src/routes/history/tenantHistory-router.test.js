const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

// Reset Database
const Reset = require('../dbReset.js');

// paths
const baseRoute = '/api/history/';
let path = baseRoute + '';

// content used for tests

describe('Tenant History Routes', () => {

  beforeAll(async () => await Reset.dbReset());
  afterAll(() => Reset.close());
  afterEach(async done => done());

  //#region - READ

  // GET: '/api/history/property' - Get all tenant history results for property, by property id.
  path = baseRoute + 'property/';

  describe('GET: \'' + path + ':id\' endpoint', () => {

    // expected input
    const id = 1
    path = path + id

    it('should return 200 status', async () => {
      expect.assertions(1);
      
      try {   
        // call function
        const results = await request.get(path);  
        // expected results
        expect(results.status).toBe(200);
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return array', async () => {
      expect.assertions(1);

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