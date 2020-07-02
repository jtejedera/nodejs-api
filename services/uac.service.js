import config from '../config/config.js';
import axios from 'axios';

const checkRole = async user => {
  try {
    const roleRequest = await axios.get(config.clientList)
    const userRole = roleRequest.data.clients.find( x => x.id === user).role
    return userRole 
  }
  catch (error){
    return { success: false, data: {}, message: `${error}`}
  }
}

export default {
  checkRole
}