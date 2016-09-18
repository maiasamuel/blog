const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('../db/knex.js');

router.get('/', function (req, res, next) {
  knex('posts')
  .then(function(posts) {

    const renderObject = {};

    renderObject.posts = posts;

    console.log(renderObject);

    res.render('index', renderObject);
  })
  .catch(function(error) { return next(error);
  });
});

router.get('/add', function (req, res, next) {
  res.render('add');
});

router.post('/add', function (req, res, next) {
  var title = req.body.title;
  var name = req.body.name;
  var content = req.body.content;
  var image = req.body.URL;

  knex('posts').insert({title: title, author: name, content: content, photo_cover_url: image})
  .then((data) => {
    res.redirect('/');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/comments', function (req, res, next) {
  knex('comments')
  .select('*')
  .then(function(data) {

    const renderObject = {};

    renderObject.data = data;

    console.log(renderObject.data);

    res.render('index', renderObject);
  })
  .catch(function(error) { return next(error);
  });
});

router.get('/comments/add', function (req, res, next) {
  res.render('comment');
});

module.exports = router;
