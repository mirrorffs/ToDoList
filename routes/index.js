const express = require('express')
const router = express.Router()
const homeController = require('../controllers/HomeController')


router.get('/',homeController.home)
router.post('/create-todo',homeController.createToDo)
router.post('/delete-todo',homeController.deleteToDo)

module.exports = router