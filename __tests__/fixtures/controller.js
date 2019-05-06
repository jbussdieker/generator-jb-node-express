'use strict'

const Foo = require('../models/foo')

module.exports = {

  index: function(req, res) {
    Foo.fetchAll().then((foos) => {
      res.status(200).json(foos)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  create: function(req, res) {
    var { name, body, user_id } = req.body

    new Foo({name: name, body: body, user_id: user_id}).save().then((foo) => {
      res.status(201).json(foo)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  delete: function(req, res) {
    var { id } = req.params

    new Foo().where({id: id}).destroy().then(() => {
      res.status(200).json({status: "OK"})
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  get: function(req, res) {
    var { id } = req.params

    new Foo().where({id: id}).fetch({require: true}).then((foo) => {
      res.status(200).json(foo)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  update: function(req, res) {
    var { id } = req.params
    var { name, body, user_id } = req.body

    new Foo().where({id: id}).fetch({require: true}).then((foo) => {
      foo.set({name: name, body: body, user_id: user_id}).save().then((foo) => {
        res.status(200).json(foo)
      }).catch((err) => {
        res.status(500).json(err)
      })
    }).catch((err) => {
      res.status(500).json(err)
    })
  }

}
