const express = require('express')
const homeRouter = express.Router()
const homeController = require('../app/controllers/HomeController')

homeRouter.get('/', homeController.index)

module.exports = homeRouter
