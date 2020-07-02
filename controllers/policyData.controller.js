import {policyDataService} from '../services/index.js';

const policyList = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    res.status(200).json(await policyDataService.policyList(userId))
  }
  catch(error){
    res.status(404).json(error);
  }
}

const policyUser = async (req, res, next) => {
  const policyNumber = req.params.policyNumber;
  try {
    res.status(200).json(await policyDataService.policyUser(policyNumber))
  }
  catch(error){
    res.status(404).json(error);
  } 
}



module.exports = {
  policyList,
  policyUser
}