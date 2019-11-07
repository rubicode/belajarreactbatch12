var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  id: String,
  task: String
});

module.exports = mongoose.model('Todo', todoSchema);
