const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const pe = require('parse-error')
const passport = require('passport')
const cors = require('cors')

const app = express()

const CONFIG = require('./config/config')
const models = require('./models')
const v1 = require('./routes/v1')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(cors())
app.use('v1', v1)

app.use('/', function (req, res) {
  res.statusCode = 200
  res.json({ status: 'success', message: 'Mongo API', data: {} })
})

app.use(function (req, res, next) {
  var error = new Error('Not found')
  next(error)
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'devlopment' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error))
})
