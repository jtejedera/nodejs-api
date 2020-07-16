import {expect} from 'chai';
import app from '../../server'
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

var token = null

describe('Login Admin user',() =>{
  it('should get token by authentication header', (done) => {
    chai.request(app)
    .post('/api/v1/login')
    .send({username:"britneyblankenship@quotezart.com", password: 123456})
    .end( (err, res ) => {
      expect(res.body).to.have.property('token');
      res.body.token?token=res.body.token:null
      done();
    });
  });

});

describe('Get User Data Endpoint as Admin ',() =>{
  it('should get all client data using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/clients')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get all client data using auth headers of an admin role and pagination/limit query', (done) => {
    chai.request(app)
    .get('/api/v1/clients?page=2&limit=20')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });  

  it('should get user data by id using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/clients/id=e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get user data by name using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/clients/name=Barnett')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });  

  it('should get clients policies using client ID using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/clients/a0ece5db-cd14-4f21-812f-966633e7be86/policies')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });  

 });

describe('Get Policy List Endpoint as Admin',() =>{
  it('should get true retrieving policy list using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/policies')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });
  
  it('should get true retrieving policy list using auth headers of an admin role and pagination/limit query', (done) => {
    chai.request(app)
    .get('/api/v1/policies?page=2&limit=20')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get false retrieving policy details by polidy id using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/v1/policies/64cceef9-3a01-49ae-a23b-3761b604800b')
    .set('authorization', `Bearer ${token}`)
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });  
});