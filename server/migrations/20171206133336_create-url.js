
exports.up = function(knex, Promise) {
  return knex.schema.createTable('url', (table) => {
    table.increments();
    table.text('url');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTable('url');
};
