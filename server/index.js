const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 6000;




app.use(express())
app.use (express.json())
app.use('/user',require('./routes/userRoutes'))
const MONGODB_URI = 'mongodb://127.0.0.1:27017/bmc';

// Connect to MongoDB (without unsupported options)
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

// Routes
app.use('/api/user', userRoutes);

// Sta12334rt the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));