'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo',
  attributes: 'title:string'
};

describe('jbb-node-express:scaffold', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../generators/scaffold'))
        .withOptions(testOptions);
    });

    it('creates all the assets', () => {
      assert.file(['controllers/', 'models/', 'routes/', 'db/migrations', 'db/seeds']);
    });
  });
});
