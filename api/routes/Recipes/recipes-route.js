const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
   Recipes.get()
      .then(recipes => {
         res.status(200).json(recipes);
      })
      .catch(error => {
         res.status(500).json({message: 'Problems fetching recipes'});
      })
});

module.exports = router;