const Liga = require('../models/liga')

const getliga = async (req, res, next) => {
  try {
    const ligas = await Liga.find()
    return res.status(200).json(ligas)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getligasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const liga = await Liga.findById(id)
    return res.status(200).json(liga)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const postliga = async (req, res, next) => {
  try {
    const newliga = new Liga(req.body)
    const ligasave = await newliga.save()
    return res.status(201).json(ligasave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putliga = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldliga = await Liga.findById(id)
    const newliga = new Liga(req.body)
    newliga._id = oldliga._id
    newliga.equipos = [...oldliga.equipos, ...req.body.equipos]
    const updateliga = await Liga.findByIdAndUpdate(id, newliga, {
      new: true
    })
    return res.status(200).json(updateliga)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deleteliga = async (req, res, next) => {
  try {
    const { id } = req.params
    const ligadelete = await Liga.findByIdAndDelete(id)
    return res.status(200).json(ligadelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getliga,
  getligasById,
  postliga,
  putliga,
  deleteliga
}
