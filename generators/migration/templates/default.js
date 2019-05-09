exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('<%= tableName %>', function(table) {
      table.increments('id');
<% for(var i=0; i < keys.length; i++) { -%>
      table.<%= attributes[keys[i]] %>('<%= keys[i] %>');
<% } -%>
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('<%= tableName %>')]);
};
