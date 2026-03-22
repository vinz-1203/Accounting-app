const express = require('express');
const router = express.Router();
const { readCSV, writeCSV } = require('../utils/csvHandler');

router.get('/', async (req, res) => {
  const data = await readCSV();
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await readCSV();

  const newTransaction = {
    id: Date.now(),
    ...req.body,
  };

  data.push(newTransaction);
  writeCSV(data);

  res.json(newTransaction);
});

module.exports = router;