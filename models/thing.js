const mongoose = require('mongoose')

let ThingSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String }
})

module.exports = mongoose.model('Thing', ThingSchema)
