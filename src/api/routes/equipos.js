const { Auth, Administrador } = require('../../middlewares/auth')
const {
  getequipos,
  getequiposById,
  getEquiposByRanking,
  postequipos,
  putequipo,
  deleteequipos
} = require('../controllers/equipos')

const equipoRouter = require('express').Router()

equipoRouter.get('/ranking/:ranking', getEquiposByRanking)
equipoRouter.get('/:id', getequiposById)
equipoRouter.get('/', getequipos)
equipoRouter.post('/', [Auth], postequipos)
equipoRouter.put('/:id', [Administrador], putequipo)
equipoRouter.delete('/:id', [Administrador], deleteequipos)

module.exports = equipoRouter
