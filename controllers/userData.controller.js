import {userDataService} from '../services/index.js';

const getUserData = async (req, res, next) => {
  try {
    res.status(200).json(await userDataService.getUserData(req))
  }
  catch(error){
    res.status(404).json(error);
  }  
}

module.exports = {
  getUserData
} 