const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: Object,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
  ,
  date: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
