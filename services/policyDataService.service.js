import config from '../config/config.js';
import axios from 'axios';

const policyList = async userId => {
  try {
    return await axios.get(config.policyList)
    .then(response => {     
      const policyDetails = response.data.policies.filter( x => x.clientId === userId)
      return { success: true, data: policyDetails.length?policyDetails:{}, message: policyDetails.length?`Policies details.`:`No policies found.`}
    })
    .catch(error => {
      return { success: false, data: {}, message: `Error: ${error}`}
    });    
  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

const policyUser = async policyNumber => {
  try {
    let policyData = {};
    let userData = {};

    await axios.get(config.policyList)
    .then(response => { policyData = response.data.policies.find( x => x.id === policyNumber) })
    .catch(error => { return { success: false, data: {}, message: `Error: ${error}`} }); 

    if(!policyData){
      return { success: true, data: {}, message: `No policy found`}
    }

    await axios.get(config.clientList)
    .then(response => { userData = response.data.clients.find( x => x.id === policyData.clientId) })
    .catch(error => { return { success: false, data: {}, message: `Error: ${error}`} });    

    return { success: true, data: userData, message: `User details of policy ${policyNumber}` }

  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

export default {
  policyList,
  policyUser
}