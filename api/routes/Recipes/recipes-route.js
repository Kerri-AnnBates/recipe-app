const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
   Recipes.get()
      .then(recipes => {
         res.status(200).json(recipes);
      })
      .catch(err => {
         res.status(500).json({ message: 'Problems fetching recipes', error: err });
      })
});

router.get('/:id', (req, res) => {
   const id = req.params.id;

   Recipes.findById(id)
      .then(recipe => {
         if (recipe) {
            res.status(200).json(recipe);
         } else {
            res.status(404).json({ message: 'No recipe exist by that id.' });
         }
      })
      .catch(err => {
         res.status(500).json({ message: 'Problems fetching recipe', error: err });
      })
})

module.exports = router;