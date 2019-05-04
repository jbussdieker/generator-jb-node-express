'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:model', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../model')).withOptions(testOptions);
    });

    it('creates models dir', () => {
      assert.file(['models/']);
    });
  });
});
