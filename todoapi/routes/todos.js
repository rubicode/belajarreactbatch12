var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Todo.find({})
  .then(data => {
    res.json({
      error: false,
      data
    })
  }).catch(err => {
    res.json({
      error: true,
      message: err
    })
  })
});

router.post('/', function(req, res, next) {
  Todo.create({id: req.body.id, task: req.body.task})
  .then(item => {
    res.json({
      error: false,
      itemAdded: item
    })
  }).catch(err => {
    res.json({
      error: true,
      message: err
    })
  })


});

router.delete('/:id', function(req, res, next) {
  Todo.findOneAndRemove({id: req.params.id})
  .then(item => {
    res.json({
      error: false,
      itemDeleted: item
    })
  }).catch(err => {
    res.json({
      error: true,
      message: err
    })
  })
});

router.post('/resend', function(req, res, next) {
  Todo.create({id: req.body.id, task: req.body.task})
  .then(item => {
    Todo.find({}).then((todos)=>{
      res.json({
        error: false,
        itemAdded: item,
        todos
      })
    }).catch(err => {
      res.json({
        error: true,
        message: err
      })
    })
  }).catch(err => {
    res.json({
      error: true,
      message: err
    })
  })
});

module.exports = router;
