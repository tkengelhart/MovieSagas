const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
    pool.query('SELECT * FROM "movies";')
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
})

module.exports = router;