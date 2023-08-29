// seperation of concerns, this file is for the item model
const monogoose = require('mongoose')
require('./category.cjs')
const itemSchema = require('./itemSchema.cjs')

module.exports = monogoose.model('Item', itemSchema)