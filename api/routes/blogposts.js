const express = require('express');

const router = express.Router();

const knex = require('../db/db');

router.get('/', (req, res) => {
  // knex('blogposts')
  //   .select('*')
  //   .then(result => {
  //     res.json({ posts: result });
  //   })
  //   .catch(err => {
  //     res.status(400).send(err);
  //   });
  // const query = knex.raw('SELECT * FROM blogposts');
  // query.then(result => {
  //   console.log(result);
  // });
  knex('blogposts').then(result => {
    res.send(result);
  });
});

module.exports = router;
