# generator-jb-node-express

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
