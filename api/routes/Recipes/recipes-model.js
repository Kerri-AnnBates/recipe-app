const db = require('../../../database/dbConfig');

module.exports = {
	get,
	getUserRecipes,
	findById,
	findByIdDetails,
	insert,
	remove,
	update
}

function get() {
	return db('recipes');
}

function findById(id) {
	return db('recipes')
		.where('id', id)
		.first();
}

function findByIdDetails(id) {
	const ingredients = db('ingredients')
		.join('recipes_ingredients', 'ingredients.id', 'recipes_ingredients.id')
		.where('recipes_ingredients.recipe_id', id);

	const steps = db('steps')
		.where('recipe_id', id);

	const recipe = db('recipes')
		.where('id', id)
		.first();

	const promises = [recipe, steps, ingredients];

	return Promise.all(promises)
		.then(results => {
			const [recipe, steps, ingredients] = results;
			recipe.ingredients = ingredients;
			recipe.steps = steps;
			// console.log(recipe)

			return recipe;
		})
}

function insert(data) {
	return db('recipes')
		.insert(data);
}

function remove(id) {
	return db('recipes')
		.where('id', id)
		.del();
}

function update(data, id) {
	return db('recipes')
		.where('id', id)
		.update(data);
}

function getUserRecipes(userId) {
	return db('recipes')
		.where('user_id', userId);
}