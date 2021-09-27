
const server = require("./index");
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.should()
chai.use(chaiHttp);


var assert = require('assert');

var gettestusers = [
    { name: 'Jeremy', age: 22},
    { name: 'Kelvin', age: 21}
]

var posttestusers = [
    { name: 'Jeremy', age: 22},
    { name: 'Kelvin', age: 21},
    { name: 'Keane', age: 33}
]

var puttestusers = [
    { name: 'Jerry', age: 21},
    { name: 'Kelvin', age: 21}
]

var deletetestusers = [
    { name: 'Kelvin', age: 21}
]

describe('Tests', function() {
  describe('GET /users', function() {
    it('should return Jeremy age 22 and Kelvin age 21', function() {
        chai.request(server)
                 .get('/users')
                 .end((err, res) => {
                    res.should.have.status(200);
                    assert(res, gettestusers);
                  });
    });
  });
  describe('POST /', function() {
    it('should return Jeremy age 22 and Kelvin age 21 and Keane 33' , function() {
        chai.request(server)
                 .post('/')
                 .send({ name: 'Keane', age: 33})
                 .end((err, res) => {
                    res.should.have.status(201);
                    assert(res, posttestusers);
                  });
    });
  });
  describe('PUT /users/:id', function() {
    it('should return Jerry age 21 and Kelvin age 21' , function() {
        chai.request(server)
                 .put('/users/0')
                 .send({ name: 'Jerry', age: 21})
                 .end((err, res) => {
                    res.should.have.status(201);
                    assert(res, puttestusers);
                  });
    });
  });
  describe('DELETE /users/:id', function() {
    it('should return Kelvin age 21 ONLY' , function() {
        chai.request(server)
                 .del('/users/0')
                 .end((err, res) => {
                    res.should.have.status(201);
                    assert(res, deletetestusers);
                  });
    });
  });
});