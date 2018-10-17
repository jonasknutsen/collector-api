const mongoose = require('mongoose')

let MovieSchema = mongoose.Schema({
  title: { type: String },
  series: { type: String },
  actors: [ { name: { type: String } } ],
  director: { type: String },
  genre: [ { type: String } ],
  format: { type: String },
  year: { type: Number },
  length: { type: Number }
})

module.exports = mongoose.model('Movie', MovieSchema)
