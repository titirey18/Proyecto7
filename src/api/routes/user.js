const { Administrador } = require('../../middlewares/auth')
const { getUsers, registerUser, login } = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.get('/', [Administrador], getUsers)
userRoutes.post('/register', registerUser)
userRoutes.post('/login', login)

module.exports = userRoutes
