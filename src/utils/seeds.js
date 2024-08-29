const mongoose = require('mongoose')
const Equipo = require('../api/models/equipos')
const equipos = require('../data/equipos')

const semilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://proyecto7:5Znk6o8EInnnEUg8@cluster0.2pbyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Equipo.collection.drop()

    await Equipo.insertMany(equipos)

    await mongoose.disconnect()
  } catch (error) {
    console.log('error')
  }
}

semilla()
