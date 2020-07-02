import {expect} from 'chai';
import app from '../../server'
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
//const url = 'http://localhost:3000/api';
//const url = '../../server.js';

describe('Get User Data Endpoint',() =>{
  it('should get user data by id using auth headers', (done) => {
    chai.request(app)
    .get('/api/user/id=e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get user data by name using auth headers', (done) => {
    chai.request(app)
    .get('/api/user/name=Barnett')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });  
 });

describe('Get Policy List Endpoint',() =>{
  it('should get true retrieving policy list by user id using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/policyList/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .set('x-access-token', 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get false retrieving policy list by user id using auth headers of a user role', (done) => {
    chai.request(app)
    .get('/api/policyList/55601290-8619-4f54-b831-9c6c26c52b44')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.false;
      done();
    });
  });  
});

describe('Get Policy User Endpoint',() =>{
  it('should get true retrieving user details by policy number using auth headers of an admin role', (done) => {
    chai.request(app)
    .get('/api/policyUser/d973993a-d35e-4d12-abb5-38083d556101')
    .set('x-access-token', 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get true retrieving user details by policy number using auth headers of a user role', (done) => {
    chai.request(app)
    .get('/api/policyUser/5d6b141e-0d22-4a84-abdb-6200ddaad7d0')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.false;
      done();
    });
  });  
});


