'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:controller', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../controller')).withOptions(testOptions);
    });

    it('creates controllers dir', () => {
      assert.file(['controllers/']);
    });
  });
});
