const db = require('../../../database/db-config.js');

module.exports = {
  // Create
  // Read
  getHistoryByProperty,
  // Update
  // Delete
};

//#region - READ 

// getHistoryByProperty() - Get all tenant history results for property, by property id.
function getHistoryByProperty(id) {
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
    .where({ 'tenanthistory.propertyId': id });
}

//#endregion