const express = require('express')

// controller 
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login router
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


module.exports = router