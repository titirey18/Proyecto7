const User = require('../api/models/user')
const { verifyJWT } = require('../config/jwt')

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const replacetoken = token.replace('Bearer ', '')

    const { id } = verifyJWT(replacetoken)

    const user = await User.findById(id)

    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(400).json('no estas autorizado')
  }
}

const Administrador = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const replacetoken = token.replace('Bearer ', '')

    const { id } = verifyJWT(replacetoken)

    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(400).json('Solo los administradores pueden hacerlo')
    }
  } catch (error) {
    return res.status(400).json('no estas autorizado')
  }
}

module.exports = { Auth, Administrador }
