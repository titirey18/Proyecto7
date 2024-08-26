const mongoose = require('mongoose')

const equiposSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    Ranking: { type: Number, required: true },
    verified: { type: Boolean, required: true, default: false }
  },

  {
    timestamps: true,
    collection: 'equipos'
  }
)

const Equipo = mongoose.model('equipos', equiposSchema, 'equipos')
module.exports = Equipo
