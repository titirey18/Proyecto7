const { generateSing } = require('../../config/jwt')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const newUser = new User({
      Name: req.body.Name,
      password: req.body.password,
      rol: 'user'
    });

    const duplicateuser = await User.findOne({ Name: req.body.Name });

    if (duplicateuser) {
      return res.status(400).json('Este usuario ya está registrado');
    }

    const Usersaved = await newUser.save();
    return res.status(201).json(Usersaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ Name: req.body.Name });

    if (!user) {
      return res.status(400).json('Este usuario no existe');
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSing(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json('La contraseña o el usuario son incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};


const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { rol } = req.body;

    if (rol === 'admin' && req.user.rol !== 'admin') {
      return res.status(403).json('No autorizado para asignar rol de admin');
    }

    const updatedUser = await User.findByIdAndUpdate(id, { rol }, { new: true });
    
    if (!updatedUser) {
      return res.status(404).json('Usuario no encontrado');
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json(error);
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (id !== req.user._id.toString() && req.user.rol !== 'admin') {
      return res.status(403).json('No autorizado para eliminar usuarios');
    }

    const deletedUser = await User.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json('Usuario no encontrado');
    }

    return res.status(200).json('Usuario eliminado');
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getUsers, registerUser, login, updateUserRole, deleteUser };
