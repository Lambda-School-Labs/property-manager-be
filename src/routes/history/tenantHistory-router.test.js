const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

// Reset Database
const Reset = require('../dbReset.js');

// paths
const path = '/api/history/';

// content used for tests

describe('Tenant History Routes', () => {

  beforeAll(async () => await Reset.dbReset());
  afterAll(() => Reset.close());
  afterEach(async done => done());

  //#region - CREATE
  
  // POST: '/api/history/' - add a new entry for tenant history, returns entry added
  describe ('POST: \'' + path + '\' endpoint', () => {

    // expected input
    const input = {
      'tenantId': 3,
      'propertyId': 5,
      'historyStartdate': "01-01-2001",
      'historyEnddate': "12-31-2006"
    }
    const input2 = {
      'tenantId': 5,
      'propertyId': 1,
      'historyStartdate': null
    }

    it('should return 201 status', async () => {
      try {
        // call function
        const results = await request.post(path).send(input);
        // expected results
        expect(results.status).toBe(201);
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return an object', async () => {
      try {
        // call function
        const results = await request.post(path).send(input2);
        const response = await results.body;
        // expected results
        expect(typeof response).toBe('object');
        // catch error
      } catch(err) { console.log(err) }
    })

  })

  //#endregion - CREATE 

  //#region - READ

  // GET: '/api/history/:id' - Get by id
  describe('GET: \'' + path + ':id\' endpoint', () => {

    // expected input
    const id = 1

    it('should return 200 status', async () => {   
      try {   
        // call function
        const results = await request.get(path + id);  
        // expected results
        expect(results.status).toBe(200);
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return an object', async () => { 
      try {   
        // call function
        const results = await request.get(path + id);
        const response = await results.body;   
        // expected results 
        expect(typeof response).toBe('object');
        // catch error
      } catch(err) { console.log(err) }
    })
  })

  // GET: '/api/history/property' - Get all tenant history results for property, by property id.
  describe('GET: \'' + path + 'property/:id\' endpoint', () => {

    // expected input
    const id = 1

    it('should return 200 status', async done => {
      expect.assertions(1);
      
      try {   
        // call function
        const results = await request.get(path + 'property/' + id);  
        // expected results
        expect(results.status).toBe(200);
        done();
        // catch error
      } catch(err) { console.log(err) }
    })

    it('should return array', async () => {
      expect.assertions(1);

      try {
        // call function
        const results = await request.get(path + 'property/' + id);
        // expected results 
        expect(Array.isArray(results.body)).toBe(true);
        // catch error
      } catch(err) { console.log(err) }
    })

  })

  // #endregion

})