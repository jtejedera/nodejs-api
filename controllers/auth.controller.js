import {authService} from '../services/index.js';

const login = async (req, res, next) => {
  try {

    if(!req.session.token) {
      const newToken = await newAPIToken()
      req.session.token = newToken
    }
    const authLogin = new authService.auth(req)
    let authResult = await authLogin.login()

    res.status(200).json(authResult)
  }
  catch(error){
    res.status(404).json(error);
  }
}

const newAPIToken = async () => {
  try{
    const auth = new authService.auth()
    const newToken = await auth.renew()
  
    return `Bearer ${newToken.token}`
  }catch(error){
    return error
  }
}

module.exports = {
  login
}