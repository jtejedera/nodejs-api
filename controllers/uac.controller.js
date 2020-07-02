import {uacService} from '../services/index.js';

const checkRole = role => {
  return async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) return res.status(200).json({success: false, data: {}, message: `No token provided`});

    try{
      const userRole = await uacService.checkRole(token)
      if(role.some(x => x === userRole)) next()
      else return res.status(200).json({success: false, data: {}, message: `You don't have access to this resource.`});
    }
    catch(error){
      return res.status(200).json({success: false, data: {}, message: `${error}`});
    }
    
  };
}

module.exports = {
  checkRole
}