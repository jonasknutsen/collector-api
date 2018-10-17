const mongoose = require('mongoose')

let BookSchema = mongoose.Schema({
  title: { type: String },
  series: { type: String },
  authors: [ { name: { type: String }, role: { type: String } } ],
  publisher: { type: String },
  format: { type: String },
  year: { type: String }
})

module.exports = mongoose.model('Book', BookSchema)
