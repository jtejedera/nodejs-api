import config from '../config/config.js';
import redisMethods from '../utils/redisFunctions.js';
import axios from 'axios';

const getUserData = async user => {
  const property = user.split('=')[0];
  if (property !== 'id' && property !== 'name'){
    return { success: false, data: {}, message: `Incorrect filter criteria.`}
  }

  const value = user.split('=')[1];
  const redisresult = await redisMethods.getClient(value);
  try {
    if(redisresult.data){
      const userDetails = JSON.parse(redisresult.data)
      return { success: true, data: userDetails?userDetails:{}, message: userDetails?`User details.`:`No user found.`}
    }else{
      return await axios.get(config.clientList)
      .then(response => {     
        const userDetails = response.data.clients.find( x => x[property] === value)
        redisMethods.setClient(value,userDetails)
        return { success: true, data: userDetails?userDetails:{}, message: userDetails?`User details.`:`No user found.`}
      })
      .catch(error => {
        return { success: false, data: {}, message: `Error: ${error}`}
      });  
    }
  
  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

export default {
  getUserData
}