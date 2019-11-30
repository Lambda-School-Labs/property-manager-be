const request = require('supertest');
const db = require('../../../database/db-config.js');
const Reset = require('../dbReset.js');
const TenantHistory = require('./tenantHistory-model');

// functions for tests
function getAll() { return db('tenanthistory') }

describe('Tenant History Model', () => {

  beforeEach(async () => {
    await Reset.dbReset();
  })

  afterEach( async done => {
    done();
  })

  //#region - READ 
  
  describe('function getHistoryByProperty', () => {
    
    it('Should return result of an object', async () => {
      
      // call function
      try {
        const results = await TenantHistory.getHistoryByProperty(1);

        // expected results
        expect(results).toHaveLength(2);

      } catch(err) {
        console.log(err)
      }
    })

  })

  //#endregion - READ

})