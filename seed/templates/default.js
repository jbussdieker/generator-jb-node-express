exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('<%= tableName %>')
      .del()
      .then(function() {
        return Promise.all([knex('<%= tableName %>').insert([{}])]);
      })
  ]);
};
