'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:route', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../generators/route'))
        .withOptions(testOptions);
    });

    it('creates routes dir', () => {
      assert.file(['routes/']);
    });
  });
});
