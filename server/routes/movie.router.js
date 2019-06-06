const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
    pool.query('SELECT * FROM "movies" LIMIT 9;')
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

router.get('/details/:id', async (req, res) => {
    pool.query('SELECT * FROM "movies" WHERE "id"=$1 LIMIT 1;', [req.params.id])
        .then(result => res.send(result.rows[0]))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

module.exports = router;