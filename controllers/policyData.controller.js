import {policyDataService} from '../services/index.js';

const policyList = async (req, res, next) => {
  const userId = req.params.userId;
  policyDataService.policyList(userId)
  .then( result => { res.status(200).json(result);})
  .catch( error => { res.status(404).json(error);})
}

const policyUser = async (req, res, next) => {
  const policyNumber = req.params.policyNumber;
  policyDataService.policyUser(policyNumber)
  .then( result => { 
    res.status(200).json(result);
  })
  .catch( error => { res.status(404).json(error);})
}



module.exports = {
  policyList,
  policyUser
}