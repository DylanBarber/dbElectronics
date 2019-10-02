const expect = require('chai').expect;
const request = require('request');

const port = process.env.PORT || 25565;

describe('Express server endpoints test', () => {
  it('Checks GET for contacts', (done) => {
    request(`http://localhost:${port}/api/contacts`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();
    });
  })
});

describe('Express server endpoints test', () => {
  it('Checks GET for products', (done) => {
    request(`http://localhost:${port}/api/products`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();
    });
  })
}); 

describe('Express server endpoints test', () => {
  it('GETs a specific contact', (done) => {
    request(`http://localhost:${port}/api/contacts/?id=1`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();
    });
  })
})

describe('Express server endpoints test', () => {
  it('GETs a specific product type', (done) => {
    request(`http://localhost:${port}/api/products/?type=computer`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();
    });
  })
})