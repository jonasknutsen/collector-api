const express = require('express')
const router = express.Router()

const ComicController = require('../controllers/comic')
const BookController = require('../controllers/book')
const MovieController = require('../controllers/movie')
const ThingController = require('../controllers/thing')

router.post('/comics', ComicController.create)
router.get('/comics', ComicController.getAll)
router.get('/comics/:comic_id', ComicController.getOne)
router.put('/comics/:comic_id', ComicController.update)
router.delete('/comics/:comic_id', ComicController.delete)

router.post('/books', BookController.create)
router.get('/books', BookController.getAll)
router.get('/books/:book_id', BookController.getOne)
router.put('/books/:book_id', BookController.update)
router.delete('/books/:book_id', BookController.delete)

router.post('/movies', MovieController.create)
router.get('/movies', MovieController.getAll)
router.get('/movies/:movie_id', MovieController.getOne)
router.put('/movies/:movie_id', MovieController.update)
router.delete('/movies/:movie_id', MovieController.delete)

router.post('/things', ThingController.create)
router.get('/things', ThingController.getAll)
router.get('/things/:thing_id', ThingController.getOne)
router.put('/things/:thing_id', ThingController.update)
router.delete('/things/:thing_id', ThingController.delete)

module.exports = router
