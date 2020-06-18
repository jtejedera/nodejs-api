import {userDataService} from '../services/index.js';

const getUserData = async (req, res, next) => {
  const user = req.params.userId;
  userDataService.getUserData(user)
  .then( result => { res.status(200).json(result);})
  .catch( error => { res.status(404).json(error);})
}

module.exports = {
  getUserData
}