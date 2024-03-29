const express = require('express')
const newsRouter = express.Router()
const newsController = require('../app/controllers/NewsController')

newsRouter.get('/:slug', newsController.detail)
newsRouter.get('/', newsController.index)

module.exports = newsRouter
