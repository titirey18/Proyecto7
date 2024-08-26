const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('El servidor se conecto')
  } catch (error) {
    console.log('Hubo un problema')
  }
}

module.exports = { connectDB }
