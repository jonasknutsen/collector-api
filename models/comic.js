const mongoose = require('mongoose')

let ComicSchema = mongoose.Schema({
  title: { type: String },
  series: { type: String },
  creators: [ { name: { type: String }, role: { type: String } } ],
  publisher: { type: String },
  format: { type: String },
  year: { type: Number },
  edition: { type: Number }
})

module.exports = mongoose.model('Comic', ComicSchema)
