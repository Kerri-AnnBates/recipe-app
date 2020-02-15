const router = require('express').Router();
const Ingredients = require('./ingredients-model');

// Get all ingredients
router.get('/', (req, res) => {
	Ingredients.getAll()
		.then(ingredients => {
			res.status(200).json(ingredients);
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to fetch ingredients', error: err })
		})
})

// POST an ingredient
router.post('/', (req, res) => {
	const { body } = req;

	Ingredients.insert(body)
		.then(count => {
			res.status(201).json(count)
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to add ingredient', error: err })
		})
})


module.exports = router;