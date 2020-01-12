const router = require('express').Router();
const User = require('./users-model');
const Recipes = require('../Recipes/recipes-model');

// get all users
router.get('/', (req, res) => {
   User.getUsers()
      .then(users => {
         res.status(200).json(users);
      })
      .catch(error => {
         res.status(500).json({ message: 'Problems getting users' });
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
         res.status(500).json({ message: 'Problems getting user.', error: err });
      })
});

// get recipes for a user.
router.get('/:id/recipes', (req, res) => {
   const id = req.params.id;

   Recipes.getUserRecipes(id)
      .then(recipes => {
         res.status(200).json(recipes);
      })
      .catch(err => {
         res.status(500).json({ message: 'Problems getting user recipes.', error: err });
      });
});

module.exports = router;

