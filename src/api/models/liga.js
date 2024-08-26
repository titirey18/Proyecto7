const mongoose = require('mongoose')

const ligaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    equipos: [
      { type: mongoose.Types.ObjectId, ref: 'equipos', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'liga'
  }
)

const Liga = mongoose.model('Liga', ligaSchema)
module.exports = Liga
