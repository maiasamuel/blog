const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('../db/knex.js');

router.get('/', function (req, res, next) {
  knex('posts')
  .then(function(posts) {

    const renderObject = {};

    renderObject.posts = posts;

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

router.delete('/:id', function (req, res, next) {
  console.log(req.params.id);
  var id = req.params.id;
  knex('posts')
  .where('id', id)
  .del()
  .then((data)=> {
    res.render('index');
  }).catch((error) => {
    console.log(error);
  });
});

router.get('/update/:id', function (req, res, next) {
  var id = req.params.id;

  knex('posts').where('id', id)
  .then((data) => {
    console.log(data[0]);
    data[0].pageTitle = 'Update';
    res.render('add', data[0]);
  }).catch((error) => {
    console.log(error);
  });

});

router.put('/update/:id', function (req, res, next) {
  console.log(req.body);
  var id = req.params.id;
  var title = req.body.title;
  var content = req.body.content;
  var url = req.body.url;
  var name = req.body.name;

  knex('posts')
  .where('id', id)
  .update({
    title: title,
    content: content,
    photo_cover_url: url,
    author: name
  })
  .then((data)=> {
    res.render('index');
  }).catch((error)=> {
    console.log(error);
  });
});

module.exports = router;
