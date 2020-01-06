const express = require('express');
const server = express();

// Routes
const userRoute = require('./routes/Users/users-routes');

server.use(express.json());
server.use('/api/users', userRoute);

server.get('/', (req, res) => {
   res.send('Fetch me some recipes!');
});

module.exports = server;