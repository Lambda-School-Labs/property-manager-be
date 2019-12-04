const express = require('express');
const History = require('./tenantHistory-model.js');
const parseDate = require('../../lib/parseDate.js');
const router = express.Router();

//#region - READ

// GET history by property id
router.get('/property/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const rawResults = await History.getHistoryByProperty(id);

    // map thru raw results to change date to a readable string
    const results = rawResults.map( x => {
      x.historyRawStartdate = x.historyStartdate
      x.historyStartdate = parseDate.simple(x.historyStartdate)
      x.historyEnddate = parseDate.simple(x.historyEnddate)
      return x
    })

    // TODO: link to new table with lease information, Maybe return lease information in an array sorted by start date

    res.json(results);

  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion 

module.exports = router; 