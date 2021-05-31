const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "movies_genres" 
  JOIN "movies" ON "movies_genres"."movie_id" = "movies.id"
  JOIN "genres" ON "movies_genres"."genre_id" = "genres.id" 
  WHERE "movie_id"=$1`;

  pool.query(queryText, req.params.id)
    .then(result => {
      res.send(result.rows);
    })
  res.sendStatus(500)
});

module.exports = router;


