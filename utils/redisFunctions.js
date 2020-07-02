import redis from 'redis';
import config from '../config/config.js'
const client = redis.createClient(config.redis);

client.on('error', (error)=> {
    console.log(error)
})

const setClient = async (clientId, userData) => {
    try {
        client.set(clientId, JSON.stringify(userData), 'EX', 3600, (error, reply) => {
            if (error)  {
                return {success:false, data: error}
            };
            return {success:true, data: reply};
         })  
    }
    catch (error){
      return error
    }
  }

const getClient = clientId => {
  return new Promise((resolve,reject) => {
      client.get(clientId, (error, reply) => {
          if(error) reject({success:false, data: error})
          resolve({success:true, data: reply});
      })   
  })      
}  
  
  export default {
    setClient,
    getClient
  }