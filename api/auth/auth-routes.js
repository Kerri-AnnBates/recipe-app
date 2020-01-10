const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
   const newUser = req.body;

   if (newUser.username && newUser.password) {

   } else {
      res.status(400).json({ message: 'Must enter username and password.' });
   }
})
