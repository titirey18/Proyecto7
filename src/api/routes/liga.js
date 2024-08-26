const { Administrador } = require('../../middlewares/auth')
const {
  getliga,
  getligasById,
  postliga,
  putliga,
  deleteliga
} = require('../controllers/liga')

const ligaRouter = require('express').Router()

ligaRouter.get('/:id', getligasById)
ligaRouter.get('/', getliga)
ligaRouter.post('/', [Administrador], postliga)
ligaRouter.put('/:id', [Administrador], putliga)
ligaRouter.delete('/:id', [Administrador], deleteliga)

module.exports = ligaRouter
