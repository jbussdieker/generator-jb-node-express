exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('<%= tableName %>', function(table) {
      table.increments('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('<%= tableName %>')]);
};
