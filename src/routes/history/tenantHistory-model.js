const db = require('../../../database/db-config.js');

module.exports = {
  // Create
  addTenantHistory,
  // Read
  getHistoryById,
  getHistoryByProperty,
  // Update
  // Delete
};

//#region - CREATE

// addTenantHistory(input) - inserts input to tenant history table and return results by id
async function addTenantHistory(input) {
  const results = await db('tenanthistory').returning('id').insert(input);
  return getHistoryById(results[0]);
}

//#endregion

//#region - READ 

// getHistoryById() - Get tenant history results by id.
function getHistoryById(id) {
  return db('tenanthistory')
    .join('users', 'users.id', 'tenanthistory.tenantId')
    .join('properties', 'properties.id', 'tenanthistory.propertyId')
    .select(
      'properties.propertyName',
      'tenanthistory.tenantId',
      'users.name',
      'users.email',
      'users.phone',
      'tenanthistory.historyStartdate',
      'tenanthistory.historyEnddate'
    )
    .where({ 'tenanthistory.id': id })    
    .first();
}

// getHistoryByProperty() - Get all tenant history results for property, by property id.
function getHistoryByProperty(id) {
  return db('tenanthistory')
    .join('users', 'users.id', 'tenanthistory.tenantId')
    .join('properties', 'properties.id', 'tenanthistory.propertyId')
    .select(
      'tenanthistory.id',
      'properties.propertyName',
      'tenanthistory.tenantId',
      'users.name',
      'users.email',
      'users.phone',
      'tenanthistory.historyStartdate',
      'tenanthistory.historyEnddate'
    )
    .where({ 'tenanthistory.propertyId': id });
}

//#endregion