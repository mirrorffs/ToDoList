const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
    date:{
        type: Date,
        required: true
    }
})

const ToDo = mongoose.model('ToDo',ToDoSchema)

module.exports = ToDo