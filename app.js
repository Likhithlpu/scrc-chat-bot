const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const configFilePath = path.join(__dirname, 'pgConfig.json');
const pgConfig = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));

const pgclient = new Client(pgConfig.pgConfig);

pgclient.connect()
  .then(() => {
    console.log('Connected!');

    const executeQuery = (queryObj) => {
      const { name, query } = queryObj;
      return new Promise((resolve, reject) => {
        pgclient.query(query, (err, res) => {
          if (err) {
            console.error(`Error executing query '${name}':`, err);
            reject(err);
          } else {
            console.log(res.rows);
            resolve();
          }
        });
      });
    };

    // Execute all queries using Promise.all
    const promises = pgConfig.queries.map((queryObj) => executeQuery(queryObj));
    return Promise.all(promises);
  })
  .then(() => {
    // All queries executed successfully, close the connection
    return pgclient.end();
  })
  .then(() => {
    console.log('Connection closed.');
  })
  .catch(err => {
    console.error('Connection error', err);
  });
