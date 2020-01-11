const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Users/users-model');

router.post('/register', (req, res) => {
   const newUser = req.body;

   if (newUser.username && newUser.password) {
      const hash = bcrypt.hashSync(newUser.password, 8);
      newUser.password = hash;
      
      User.add(newUser)
         .then(user => {
            res.status(201).json(user);
         })
         .catch(err => {
            res.status(500).json({ message: 'Problems adding user', error: err });
         });
   } else {
      res.status(400).json({ message: 'Must enter username and password.' });
   }
})

module.exports = router;