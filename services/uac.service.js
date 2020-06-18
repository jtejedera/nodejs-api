import config from '../config/config.js';
import axios from 'axios';

const checkRole = async user => {
  try {
    return await axios.get(config.clientList)
    .then(response => {     
      const userRole = response.data.clients.find( x => x.id === user).role
      return userRole
    })
    .catch(error => {
      return { success: false, data: {}, message: `Error: ${error}`}
    });    
  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

export default {
  checkRole
}