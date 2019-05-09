'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:seed', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../generators/seed'))
        .withOptions(testOptions);
    });

    it('creates db/seeds dir', () => {
      assert.file(['db/seeds/']);
    });
  });
});
