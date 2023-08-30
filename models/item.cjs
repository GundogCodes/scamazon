// seperation of concerns, this file is for the item model
const mongoose = require('mongoose')
require('./category.cjs')
const itemSchema = require('./itemSchema.cjs')

module.exports = mongoose.model('Item', itemSchema)