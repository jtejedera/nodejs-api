import {expect} from 'chai';
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('Get User Data Endpoint',() =>{
  it('should get user data by id using auth headers', (done) => {
    chai.request(url)
    .get('/user/id=e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get user data by name using auth headers', (done) => {
    chai.request(url)
    .get('/user/name=Barnett')
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
    chai.request(url)
    .get('/policyList/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .set('x-access-token', 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get false retrieving policy list by user id using auth headers of a user role', (done) => {
    chai.request(url)
    .get('/policyList/e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
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
    chai.request(url)
    .get('/policyUser/d973993a-d35e-4d12-abb5-38083d556101')
    .set('x-access-token', 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.true;
      done();
    });
  });

  it('should get true retrieving user details by policy number using auth headers of a user role', (done) => {
    chai.request(url)
    .get('/policyUser/d973993a-d35e-4d12-abb5-38083d556101')
    .set('x-access-token', 'a3b8d425-2b60-4ad7-becc-bedf2ef860bd')
    .end( (err, res ) => {
      expect(res).to.have.status(200);
      expect(res.body.success).to.be.false;
      done();
    });
  });  
});


