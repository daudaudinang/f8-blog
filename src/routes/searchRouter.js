const express = require('express')
const searchRouter = express.Router()
const searchController = require('../app/controllers/SearchController')

searchRouter.get('/', searchController.index)

searchRouter.post('/', searchController.indexPost)

module.exports = searchRouter