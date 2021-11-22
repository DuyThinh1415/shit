const express = require('express')
const router = express.Router()

const testController = require('../app/controllers/TestController')

router.get('/food-list/:slug', testController.show_detal_food)
router.get('/menu', testController.show_menu)

module.exports = router