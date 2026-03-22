const fs = require('fs');
const csv = require('csv-parser');
const { Parser } = require('json2csv');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../data/transactions.csv');

const readCSV = () => {
  return new Promise((resolve) => {
    const results = [];
    fs.createReadStream(FILE_PATH)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results));
  });
};

const writeCSV = (data) => {
  const parser = new Parser();
  const csvData = parser.parse(data);
  fs.writeFileSync(FILE_PATH, csvData);
};

module.exports = { readCSV, writeCSV };