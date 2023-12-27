/*const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Placeholder for user data. In a real app, this should be fetched from the database.
const users = [
  { username: 'user1', email: 'user1@example.com', password: 'hashed_password' },
  // Add more user objects as needed
];

router.get('/profile', authMiddleware, (req, res) => {
  const user = users.find(u => u.username === req.user.username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ profile: { username: user.username, email: user.email } });
});

router.put('/update', authMiddleware, (req, res) => {
  const { newUsername, newEmail, password } = req.body;
  const userIndex = users.findIndex(u => u.username === req.user.username);

  if (userIndex === -1 || users[userIndex].password !== password) {
    return res.status(401).json({ message: 'Unauthorized - Invalid credentials' });
  }

  users[userIndex].username = newUsername;
  users[userIndex].email = newEmail;

  res.json({ message: 'Profile updated successfully' });
});

router.delete('/delete', authMiddleware, (req, res) => {
  const { password } = req.body;
  const userIndex = users.findIndex(u => u.username === req.user.username);

  if (userIndex === -1 || users[userIndex].password !== password) {
    return res.status(401).json({ message: 'Unauthorized - Invalid credentials' });
  }

  users.splice(userIndex, 1);

  res.json({ message: 'Account deleted successfully' });
});

module.exports = router;*/

const express = require('express')

const userController = require('../contronllers/userController')

const router = express.Router()

router.route('/')
        .get(userController.usersGet)
        .post(userController.createUser)
        .put(userController.updateuser)
        .delete(userController.deleteUser)
module.exports=router

