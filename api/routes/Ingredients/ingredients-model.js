const db = require('../../../database/dbConfig');

module.exports = {
   getIngredientsByRecipe
}

function getIngredientsByRecipe(recipeId) {
   // select * from ingredients as i
   // inner join recipes_ingredients as ri on i.id = ri.ingredient_id
   // where ri.recipe_id = 1;

   return db('ingredients')
      .join('recipes_ingredients', 'ingredients.id', 'recipes_ingredients.id')
      .where('recipes_ingredients.recipe_id', recipeId);
}