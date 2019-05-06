process.env.NODE_ENV = 'test';
const { app, chai } = require('../helper')

const <%= modelName %> = require('../../models/<%= singularName %>')

describe("<%= modelName %>", () => {
  var agent
  var test<%= modelName %>
  var subject

  before(function(done) {
    <%= modelName %>.where('id', '!=', 0).destroy().catch(() => {})
    agent = chai.request.agent(app)
    <%= modelName %>.forge(<%- JSON.stringify(mockAttributes) %>).save().then((<%= singularName %>) => {
      test<%= modelName %> = <%= singularName %>
      done()
    })
  })

  describe("GET /<%= pluralName %>", () => {
    before(function(done) {
      agent.get('/<%= pluralName %>').end((_, res) => {
        subject = res
        done()
      })
    })

    it("should return 200", () => {
      subject.should.have.status(200)
    })

    it("should return an array", () => {
      subject.body.should.be.an('array')
    })

    it("should contain 1 <%= singularName %>", () => {
      subject.body.should.have.length(1)
    })
  })

  describe("POST /<%= pluralName %>", () => {
    before(function(done) {
      agent.post('/<%= pluralName %>').send(<%- JSON.stringify(mockAttributes) %>).end((_, res) => {
        subject = res
        done()
      })
    })

    it("should return 201", () => {
      subject.should.have.status(201)
    })

    it("should return an object", () => {
      subject.body.should.be.an('object')
    })

<% for(var i=0; i < keys.length; i++) { -%>
    it("should return the <%= keys[i] %>", () => {
      subject.body.<%= keys[i] %>.should.eql(<%- JSON.stringify(mockAttributes[keys[i]]) %>)
    })
<% } -%>

    it("should have all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(<%- JSON.stringify(["id", ...Object.keys(mockAttributes)]) %>)
    })
  })

  describe("GET /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.get(`/<%= pluralName %>/${test<%= modelName %>.id}`).end((_, res) => {
        subject = res
        done()
      })
    })

    it("should return 200", () => {
      subject.should.have.status(200)
    })

    it("should return an object", () => {
      subject.body.should.be.an('object')
    })

<% for(var i=0; i < keys.length; i++) { -%>
    it("should return the <%= keys[i] %>", () => {
      subject.body.<%= keys[i] %>.should.eql(<%- JSON.stringify(mockAttributes[keys[i]]) %>)
    })
<% } -%>

    it("should have all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(<%- JSON.stringify(["id", ...Object.keys(mockAttributes)]) %>)
    })
  })

  describe("POST /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.post(`/<%= pluralName %>/${test<%= modelName %>.id}`).send(<%- JSON.stringify(mockAttributesDelta) %>).end((_, res) => {
        subject = res
        done()
      })
    })

    it("should return 200", () => {
      subject.should.have.status(200)
    })

    it("should return an object", () => {
      subject.body.should.be.an('object')
    })

<% for(var i=0; i < keys.length; i++) { -%>
    it("should return the <%= keys[i] %>", () => {
      subject.body.<%= keys[i] %>.should.eql(<%- JSON.stringify(mockAttributesDelta[keys[i]]) %>)
    })
<% } -%>

    it("should have all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(<%- JSON.stringify(["id", ...Object.keys(mockAttributes)]) %>)
    })
  })

  describe("DELETE /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.delete(`/<%= pluralName %>/${test<%= modelName %>.id}`).end((_, res) => {
        subject = res
        done()
      })
    })

    it("should return 200", () => {
      subject.should.have.status(200)
    })

    it("should return an object", () => {
      subject.body.should.be.an('object')
    })

    it('should respond with {"status": "OK"}', () => {
      subject.body.should.eql({status: "OK"})
    })
  })
})
