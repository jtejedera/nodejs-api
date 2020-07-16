import {authService} from '../services/index';

const checkRole = role => {
  return async (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(200).json({success: false, data: {}, message: `No token provided`});
    let bearer = token.split(' ');

    try{
      const auth = new authService.auth({token: bearer[1]})
      const decodedUser = await auth.verifyJWT()
      if(!role.some(x => x === decodedUser.role)) return res.status(200).json({success: false, data: {}, message: `You don't have access to this resource.`});
      if(!req.session.token) {
        const auth = new authService.auth()
        const newToken = await auth.renew()
        req.session.token = `Bearer ${newToken.token}`
      }
      req.reqUser = decodedUser
      next()
    }
    catch(error){
      return res.status(200).json({success: false, data: {}, message: `${error}`});
    }
  };
}

module.exports = {
  checkRole
}
