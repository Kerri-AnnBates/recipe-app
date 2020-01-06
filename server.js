const express = require('express');
const server = express();

server.get('/', (req, res) => {
   res.send('Fetch me some recipes!');
});

module.exports = server;