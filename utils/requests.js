import axios from 'axios'
import config from '../config/config.js';

const requestQuery = async (path,token) => {
    return new Promise((resolve,reject)=>{
      axios.get(`${config.API_URL}${path}`, {headers: {Authorization: token}})
      .then((result) => {resolve(result)})
      .catch((error) => reject(error))
    })
  }

const errorHandler = async (path,error,req) => {
  try{
      if(error.response.data.statusCode===401){
          const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': 'axa','client_secret': 's3cr3t'})
          if(loginRequest.data.token){
            req.session.token = `Bearer ${loginRequest.data.token}`
            return  await requestQuery(path,`Bearer ${loginRequest.data.token}`)    
          }
        }else{
          return error.response.data
        }
  }catch(error){
    return error
  }

}
export default {
    requestQuery,
    errorHandler
}