const router = require('express').Router();
const User = require('./users-model');

// get all users
router.get('/', (req, res) => {
   User.getUsers()
      .then(users => {
         res.status(200).json(users);
      })
      .catch(error => {
         res.status(500).json({message: 'Problems getting users'});
      })
});

// get user by id
router.get('/:id', (req, res) => {
   const id = req.params.id;
   
   User.findById(id)
      .then(user => {
         res.status(200).json(user);
      })
      .catch(err => {
         res.status(500).json({message: 'Problems getting user.', error: err});
      })
});

module.exports = router;

