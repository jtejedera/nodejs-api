import {userDataService} from '../services/index.js';

const getUserData = async (req, res, next) => {
  const user = req.params.userId;
  try {
    res.status(200).json(await userDataService.getUserData(user))
  }
  catch(error){
    res.status(404).json(error);
  }  
}

module.exports = {
  getUserData
}