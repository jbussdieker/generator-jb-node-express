'use strict';

const bookshelf = require('../db/bookshelf');

module.exports =
  bookshelf.model('<%= modelName %>') ||
  bookshelf.model(
    '<%= modelName %>',
    bookshelf.Model.extend({
      tableName: '<%= tableName %>'
    })
  );
