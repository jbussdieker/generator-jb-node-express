'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:controller', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../controller')).withOptions(testOptions);
    });

    it('creates controller', () => {
      assert.file(['controllers/foos.js']);
    });
  });

  describe('scaffold', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../controller')).withOptions({
        ...testOptions,
        attributes: 'name:string,body:text,user_id:integer',
        template: 'scaffold'
      });
    });

    it('creates controller', () => {
      assert.file(['controllers/foos.js']);
    });

    it('matches fixture', () => {
      const fixture = fs.readFileSync(
        path.join(__dirname, './fixtures/controller.js'),
        'utf8'
      );
      assert.fileContent('controllers/foos.js', fixture);
    });
  });
});
