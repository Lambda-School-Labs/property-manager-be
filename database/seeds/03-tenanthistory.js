exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.from("tenanthistory").insert([
    {
      // id: 1, (auto)
      'tenantId': 3,
      'propertyId': 1,
      'historyStartdate': "01-01-2001",
      'historyEnddate': "01-01-2010"
    },
    {
      // id: 2, (auto)
      'tenantId': 3,
      'propertyId': 1,
      'historyStartdate': "01-01-2012",
      'historyEnddate': null
    }
  ]);
};
