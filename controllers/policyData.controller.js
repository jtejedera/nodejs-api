import {policyDataService} from '../services/index.js';

const policyUser = async (req, res, next) => {
  try {
    if(req.params.id) res.status(200).json(await policyDataService.policyId(req))
    else res.status(200).json(await policyDataService.policyUser(req))
  }
  catch(error){
    res.status(404).json(error);
  } 
}



module.exports = {
  policyUser
}