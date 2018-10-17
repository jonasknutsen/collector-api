const mongoose = require('mongoose')
const validate = require('mongoose-validator')

let UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    sparse: true,
    validate: [validate({
      validator: 'isEmail',
      message: 'Not a valid email.'
    })]
  },
  password: { type: String }
})

module.exports = mongoose.model('User', UserSchema)
