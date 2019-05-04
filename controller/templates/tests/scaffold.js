process.env.NODE_ENV = 'test';
const { app, chai } = require('../helper')

const <%= modelName %> = require('../../models/<%= singularName %>')

describe("<%= modelName %>", () => {
  var agent
  var test_<%= singularName %>
  var subject

  before(function(done) {
    <%= modelName %>.where('id', '!=', 0).destroy().catch(() => {})
    agent = chai.request.agent(app)
    <%= modelName %>.forge({someattr: "foo"}).save().then((<%= singularName %>) => {
      test_<%= singularName %> = <%= singularName %>
      done()
    })
  })

  describe("GET /<%= pluralName %>", () => {
    before(function(done) {
      agent.get('/<%= pluralName %>').end((err, res) => {
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
      agent.post('/<%= pluralName %>').send({someattr: 'foo'}).end((err, res) => {
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

    it("should return the somattr", () => {
      subject.body.someattr.should.eql("foo")
    })

    it("should have all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(["id", "someattr"])
    })
  })

  describe("GET /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.get(`/<%= pluralName %>/${test_<%= singularName %>.id}`).end((err, res) => {
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

    it("should return the someattr", () => {
      subject.body.someattr.should.eql(test_<%= singularName %>.attributes.someattr)
    })

    it("should return all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(["id", "someattr"]);
    })
  })

  describe("POST /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.post(`/<%= pluralName %>/${test_<%= singularName %>.id}`).send({someattr: "barber"}).end((err, res) => {
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

    it("should return the someattr", () => {
      subject.body.someattr.should.eql("barber")
    })

    it("should return all the <%= singularName %> keys", () => {
      subject.body.should.have.all.keys(["id", "someattr"]);
    })
  })

  describe("DELETE /<%= pluralName %>/:id", () => {
    before(function(done) {
      agent.delete(`/<%= pluralName %>/${test_<%= singularName %>.id}`).end((err, res) => {
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
