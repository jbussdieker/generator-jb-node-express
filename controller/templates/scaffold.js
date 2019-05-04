'use strict'

const <%= modelName %> = require('../models/<%= singularName %>')

module.exports = {

  index: function(req, res) {
    <%= modelName %>.fetchAll().then((<%= pluralName %>) => {
      res.status(200).json(<%= pluralName %>)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  create: function(req, res) {
    var { someattr } = req.body

    new <%= modelName %>({someattr: someattr}).save().then((<%= singularName %>) => {
      res.status(201).json(<%= singularName %>)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  delete: function(req, res) {
    var { id } = req.params

    new <%= modelName %>().where({id: id}).destroy().then(() => {
      res.status(200).json({status: "OK"})
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  get: function(req, res) {
    var { id } = req.params

    new <%= modelName %>().where({id: id}).fetch({require: true}).then((<%= singularName %>) => {
      res.status(200).json(<%= singularName %>)
    }).catch((err) => {
      res.status(500).json(err)
    })
  },

  update: function(req, res) {
    var { id } = req.params
    var { someattr } = req.body

    new <%= modelName %>().where({id: id}).fetch({require: true}).then((<%= singularName %>) => {
      <%= singularName %>.set('someattr', someattr).save().then((<%= singularName %>) => {
        res.status(200).json(<%= singularName %>)
      }).catch((err) => {
        res.status(500).json(err)
      })
    }).catch((err) => {
      res.status(500).json(err)
    })
  }

}
