# generator-jb-node-express [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> NodeJS Express project generator

## Getting started

- Install: `npm install -g generator-jb-node-express`
- Run: `yo jb-node-express`


## Commands

* `yo jb-node-express` shows a wizard for generating a new NodeJS Express project
* `yo jb-node-express:scaffold --name mymodel` shows a wizard for generating a new resource


## What do you get?

Scaffolds out a basic NodeJS Express project

```
.
├── app.js
├── bin
│   └── www
├── config
│   └── default.json
├── controllers
│   └── mymodels.js
├── db
│   ├── bookshelf.js
│   ├── knexfile.js
│   ├── migrations
│   │   └── 20190503090221_create_mymodels.js
│   └── seeds
│       └── mymodels.js
├── models
│   └── mymodel.js
├── package-lock.json
├── package.json
├── routes
│   ├── index.js
│   └── mymodels.js
└── tests
    ├── controllers
    │   └── mymodels.js
    └── helper.js
```

## License

MIT © [Joshua Bussdieker](github.com/jbussdieker)


[npm-image]: https://badge.fury.io/js/generator-jb-node-express.svg
[npm-url]: https://npmjs.org/package/generator-jb-node-express
[travis-image]: https://travis-ci.org/jbussdieker/generator-jb-node-express.svg?branch=master
[travis-url]: https://travis-ci.org/jbussdieker/generator-jb-node-express
[daviddm-image]: https://david-dm.org/jbussdieker/generator-jb-node-express.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbussdieker/generator-jb-node-express
[coveralls-image]: https://coveralls.io/repos/jbussdieker/generator-jb-node-express/badge.svg
[coveralls-url]: https://coveralls.io/r/jbussdieker/generator-jb-node-express
