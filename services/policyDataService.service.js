import config from '../config/config.js';
import axios from 'axios';

const policyList = async userId => {
  try {
    const policyRequest = await axios.get(config.policyList)    
    const policyDetails = policyRequest.data.policies.filter( x => x.clientId === userId)
    return { success: true, data: policyDetails.length?policyDetails:{}, message: policyDetails.length?`Policies details.`:`No policies found.`}

  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

const policyUser = async policyNumber => {
  try {
    let policyRequest = await axios.get(config.policyList)
    const policyData = policyRequest.data.policies.find( x => x.id === policyNumber)

    if(!policyData){
      return { success: true, data: {}, message: `No policy found`}
    }

    const userRequest = await axios.get(config.clientList)
    const userData = userRequest.data.clients.find( x => x.id === policyData.clientId)

    return { success: true, data: userData, message: `User details of policy ${policyNumber}` }

  }
  catch (error){
    return { success: false, data: {}, message: `${error}`}
  }
}

export default {
  policyList,
  policyUser
}