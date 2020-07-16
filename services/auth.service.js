import config from '../config/config.js';
import request from '../utils/requests'
import jwt from 'jsonwebtoken';
import axios from 'axios';

class auth{
  constructor(req){
      this.username = req?(req.body?req.body.username:null):null
      this.password = req?(req.body?req.body.password:null):null
      this.id = null
      this.token = req?(req.token?req.token:null):null
      this.sessionToken = req?(req.session?req.session.token:null):null
  };

  async login(){
    try{
      const userlist = await request.requestQuery('clients',this.sessionToken)
      const userVerification = userlist.data.find(u => u.email === this.username)
      if(!userVerification || this.password != 123456) return { success: false, data: {}, message: `Incorrect login.`} 
      
      this.id = userVerification.id;
      this.role = userVerification.role
      
      this.token = await this.signJWT()
      const verify = await this.verifyJWT()

      return { token: this.token, type: 'Bearer', expires_in: verify.exp }  
    }
    catch(error){
        return { success: false, data: {}, message: `Error: ${error.message}`}
    }
  };

  async signJWT(){
    try{
      const token = jwt.sign({
        username: this.username,
        id: this.id,
        role: this.role
      },(config.API_KEY), {
        expiresIn: '1h'
      });
      return token
    }
    catch(error){
      return error
    }
  }

  async verifyJWT(){
    try{
      return jwt.verify(this.token, config.API_KEY)
    }
    catch(error){
      return error
    }
  } 
  
  async renew() {
    try {
      const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': 'axa','client_secret': 's3cr3t'})
      return loginRequest.data;
    }
    catch (error){
      return { success: false, data: {}, message: `${error}`}
    }
  }  
};

module.exports = {
  auth
};