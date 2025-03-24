const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const fs = require('fs');
const path = require('path');

const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
const seed = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');

db.serialize(() => {
  db.exec(schema);
  db.exec(seed);
});

module.exports = db;
