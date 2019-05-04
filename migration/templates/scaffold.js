exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('<%= tableName %>', function(table) {
      table.increments('id');
      table.string('someattr');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('<%= tableName %>')]);
};
