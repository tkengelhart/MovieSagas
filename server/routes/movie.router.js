const router = require('express').Router();
const pool = require('../modules/pool');

app.get('/', (req, res) => {
    pool.query('SELECT * FROM "movies";')
})

module.exports = router;