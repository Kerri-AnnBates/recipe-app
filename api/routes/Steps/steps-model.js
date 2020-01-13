const db = require('../../../database/dbConfig');

module.exports = {
   getStepsByRecipe
}

function getStepsByRecipe(id) {
   return db('steps')
      .where('recipe_id', id);
}