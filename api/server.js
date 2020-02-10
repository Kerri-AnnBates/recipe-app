const express = require('express');
const server = express();
const cors = require('cors');

// Routes
const userRoute = require('./routes/Users/users-routes');
const recipeRoute = require('./routes/Recipes/recipes-route');
const authRoute = require('./routes/Auth/auth-routes');

server.use(express.json());
server.use(cors());
server.use('/api/users', userRoute);
server.use('/api/recipes', recipeRoute);
server.use('/api/auth', authRoute);

module.exports = server;