const express = require('express');
const server = express();

// Routes
const userRoute = require('./routes/Users/users-routes');
const recipeRoute = require('./routes/Recipes/recipes-route');

server.use(express.json());
server.use('/api/users', userRoute);
server.use('/api/recipes', recipeRoute);

server.get('/', (req, res) => {
   res.send('Fetch me some recipes!');
});

module.exports = server;