const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "movies" ORDER BY "id";`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error making movies get request', error);
            res.sendStatus(500);
        });
});

module.exports = router;