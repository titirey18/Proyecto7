const Equipo = require('../models/equipos')

const getequipos = async (req, res, next) => {
  try {
    const equipos = await Equipo.find()
    return res.status(200).json(equipos)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getequiposById = async (req, res, next) => {
  try {
    const { id } = req.params
    const equipo = await Equipo.findById(id)
    return res.status(200).json(equipo)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const getEquiposByRanking = async (req, res, next) => {
  try {
    const { ranking } = req.params
    const rankingNumber = Number(ranking)

    if (isNaN(rankingNumber)) {
      return res.status(400).json({ message: 'Ranking inválida' })
    }

    const equipos = await Equipo.find({ ranking: rankingNumber })
    return res.status(200).json(equipos)
  } catch (error) {
    return res.status(404).json({ message: 'Error en la solicitud' })
  }
}

const postequipos = async (req, res, next) => {
  try {
    const newequipo = new Equipo(req.body)
    if (req.user.rol === 'admin') {
      newequipo.verified = true
    } else {
      newequipo.verified = false
    }
    const equiposave = await newequipo.save()
    return res.status(201).json(equiposave)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const putequipo = async (req, res, next) => {
  try {
    const { id } = req.params
    const newequipo = new Equipo(req.body)
    newequipo._id = id
    const updatequipo = await Equipo.findByIdAndUpdate(id, newequipo, {
      new: true
    })
    return res.status(200).json(updatequipo)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

const deleteequipos = async (req, res, next) => {
  try {
    const { id } = req.params
    const equipodelete = await Equipo.findByIdAndDelete(id)
    return res.status(200).json(equipodelete)
  } catch (error) {
    return res.status(404).json('Error en la solicitud')
  }
}

module.exports = {
  getequipos,
  getequiposById,
  getEquiposByRanking,
  postequipos,
  putequipo,
  deleteequipos
}
