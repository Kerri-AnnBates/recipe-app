
exports.up = function(knex) {
   return knex.shema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('username', 128)
         .notNullable()
         .unique();

      tbl.string('password', 128)
         .notNullable();
   })
   .createTable('recipes', tbl => {
      tbl.increments();

      tbl.integer('user_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.string('title', 128)
         .notNullable();

      tbl.string('description', 255)
         .notNullable();
   })
   .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 255)
         .notNullable();
   })
   .createTable('recipes_ingredients', tbl => {
      tbl.increments();

      tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.integer('ingredients_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('ingredients')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

      tbl.boolean()
         .notNullable()
         .defaultTo(false);
   });
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('recipes_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
      .dropTableIfExists('users');
};
