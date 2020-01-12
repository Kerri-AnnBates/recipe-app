const db = require('../../../database/dbConfig');

module.exports = {
   get,
   getUserRecipes,
   findById,
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