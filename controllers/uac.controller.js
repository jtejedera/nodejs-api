import {uacService} from '../services/index.js';

const checkRole = role => {
  return function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      uacService.checkRole(token)
      .then( result => { 
        if(role.some(x => x === result)){
          return next()
        }else{
          return res.status(200).json({success: false, data: {}, message: `You don't have access to this resource.`});
        }
      })
      .catch( error => { res.status(404).json(error);})          
    } else {
      return res.status(200).json({success: false, data: {}, message: `No token provided`});
    }  
  };
}

module.exports = {
  checkRole
}