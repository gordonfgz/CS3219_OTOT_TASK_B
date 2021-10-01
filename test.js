
const server = require("./index");
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.should()
chai.use(chaiHttp);


var assert = require('assert');

var gettestusers = [
    { Id: 1, Name: 'Jeremy', Age: 22},
    { Id: 2, Name: 'Kelvin', Age: 21}
]

var posttestusers = [
    { Id: 1, Name: 'Jeremy', Age: 22},
    { Id: 2, Name: 'Kelvin', Age: 21},
    { Id: 3, Name: 'Keane', Age: 33}
]

var puttestusers = [
    { Id: 1, Name: 'Jerry', Age: 21},
    { Id: 2, Name: 'Kelvin', Age: 21}
]

var deletetestusers = [
    { Id: 2, Name: 'Kelvin', Age: 21}
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
                 .send({ Id:3, Name: 'Keane', Age: 33})
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
                 .send({ Id: 1, Name: 'Jerry', Age: 21})
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