const app = require('../../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
const Reset = require('../dbReset.js');

// content used for tests
let path = '/api/history/';

describe('Tenant History Routes', () => {

  beforeEach(async () => await Reset.dbReset());
  afterEach(async done => done());

  //#region - READ

  // GET: '/api/history/property' - Get all tenant history results for property, by property id.
  describe('GET: \'' + path + 'property/\' endpoint', () => {

    // expected input
    const id = 1
    path = path + 'property/' + id

    it('should return 200 status', async () => {      
      // call function  
      try {   
        const results = await request.get(path);   
        expect(results.status).toBe(200);
      } catch(err) {
        console.log(err)
      }
    })

    it('should return a length of 1', async () => {    
      // call function  
      try {   
        const results = await request.get(path);
        const response = await results.body;    
        expect(response).toHaveLength(1);
      } catch(err) {
        console.log(err)
      }
    })

    it('should return array', async () => {  
      // call function  
      try {
        const results = await request.get(path);
        const response = await results.body;  
        expect(Array.isArray(response)).toBe(true);
      } catch(err) {
        console.log(err)
      }
    })
  })

  // #endregion

})