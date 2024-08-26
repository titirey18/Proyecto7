const mongoose = require('mongoose')
const brcypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    Name: { type: String, require: true },
    password: { type: String, require: true },
    rol: {
      type: String,
      require: true,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userSchema.pre('save', function () {
  this.password = brcypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
