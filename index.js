require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const ligaRouter = require('./src/api/routes/liga')
const equipoRouter = require('./src/api/routes/equipos')
const userRoutes = require('./src/api/routes/user')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()
app.use('/api/v1/liga', ligaRouter)
app.use('/api/v1/equipos', equipoRouter)
app.use('/api/v1/users', userRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('return not found')
})

app.listen(3000, () => {
  console.log('servidor levantado en http://localhost:3000')
})
