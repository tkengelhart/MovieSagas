const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get(`/:id`, (req, res) => {


  pool.query(queryText, req.params.id)
    .then(result => {
      res.send(result.rows);
    })
  res.sendStatus(500)
});

module.exports = router;


