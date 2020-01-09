const db = require('../../../database/dbConfig');

module.exports = {
   get,
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