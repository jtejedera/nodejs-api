import redis from 'redis';
import config from '../config/config.js'
const client = redis.createClient(config.redis);

client.on('error', (error)=> {
    console.log(error)
})

const setClient = (clientId, userData) => {
  return new Promise((resolve,reject) => {
    client.set(clientId, JSON.stringify(userData), 'EX', 3600, (error, reply) => {
        if (error)  {
            reject({success:false, data: {}, message: `${error}`})
        };
        resolve({success:true, data: reply, message: `User added to Redis`});
      })  
  })    
}

const getClient = clientId => {
  return new Promise((resolve,reject) => {
      client.get(clientId, (error, reply) => {
          if(error) reject({success:false, data: {}, message: `${error}`})
          resolve({success:true, data: reply, message: `Client data`});
      })   
  })
}  
  
  export default {
    setClient,
    getClient
  }