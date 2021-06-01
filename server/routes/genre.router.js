const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movie_genres" JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id";`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
  res.sendStatus(500)
});

module.exports = router;


