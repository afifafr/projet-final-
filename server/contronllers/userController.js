const User = require('../models/userModel')
const bcrypt = require('bcrypt')


//get all users 

const usersGet = async (req, res) => {
    const users = await User.find()
    if (!users.length) {
        res.status(400).send('not users found')

    }
    res.json(users)
}
// create new user
const createUser = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(401).send('tout les champs sont obligatoire')
    }
    const passwordcrypte = await bcrypt.hash(password, 10)
    const newUser = { username, "password": passwordcrypte }
    const user = await User.create(newUser)
    res.status(200).send('user created')
}
//update user
const updateuser = async (req, res) => {
    const { id, username, password } = req.body
    const user = await User.findById(id)
    if (!user) {
        res.status(400).send('not users found')
    }
    user.username = username
    const passwordcrypte = await bcrypt.hash(password, 10)
    user.password = passwordcrypte
    const userupdate = await user.save()
    res.status(200).send('updated')
}
//delete user
const deleteUser = async (req, res) => {
    const { id } = req.body
    const user = await User.findById(id)
    if (!user) {
        res.status(400).send('not users found')
    }
    const del = await user.deleteOne(user)
    res.status(200).send('deleted')
}
module.exports = { usersGet, createUser, updateuser, deleteUser }