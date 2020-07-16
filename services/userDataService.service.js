import request from '../utils/requests'
import utils from '../utils/pagination'
import policyDataService from './policyDataService.service';

const getUserData = async req => {
  const policyList = await policyDataService.policyList(req)

  if(req.params.id){
    const property = req.params.id.split('=')[0];
    if (property !== 'id' && property !== 'name'){
      return { success: false, data: {}, message: `Incorrect filter criteria.`}
    }
    const value = req.params.id.split('=')[1];

    try {   
      const userlist = await request.requestQuery('clients',req.session.token)
      const userDetails = await findUser(value,property,userlist)
      
      if(userDetails.id != req.reqUser.id && req.reqUser.role != 'admin') return { success: false, data: {}, message: `Unable to access to the resource.`}
      if(userDetails && policyList.data.length) userDetails.policies = await formatResult(true,userDetails,policyList)
      return { success: true, data: userDetails?userDetails:{}, message: userDetails?`User details.`:`No user found.`}
    }
    catch (error){
      const userlist =  await request.errorHandler('clients',error, req)
      const userDetails = await findUser(value,property,userlist)  

      if(userDetails.id != req.reqUser.id && req.reqUser.role != 'admin') return { success: false, data: {}, message: `Unable to access to the resource.`}
      if(userDetails) userDetails.policies = await formatResult(true,userDetails,policyList)      
      return { success: true, data: userDetails?userDetails:{}, message: userDetails?`User details.`:`No user found.`}
    }
  }else{
    try {
      if(!policyList.data.length) return { success: true, data: {}, message: `No data found.`}
      const userlist = await request.requestQuery('clients',req.session.token)
      let formatList  = await formatResult(false,userlist,policyList,req)
      return { success: true, data: formatList?formatList:{}, message: formatList?`User details.`:`No data found.`}
    }
    catch (error){
      const userlist =  await request.errorHandler('clients',error, req)
      let formatList  = await formatResult(false,userlist,policyList,req)
      return { success: true, data: formatList?formatList:{}, message: formatList?`User details.`:`No data found.`}      
    }    
  }
}

const findUser = async (userToFind,property,userList) => {
  return userList.data.find( x => x[property] === userToFind)
}


const formatResult = async (single,userDetails,policyList,req) => {
  if(single){
    const userPolicies = policyList.data.filter(p => p.clientId === userDetails.id)
    const formatPolicies = userPolicies.map(x => {return {
      id: x.id,
      amountInsured: x.amountInsured,
      inceptionDate: x.inceptionDate
    }})
    
    return formatPolicies
  }else{
    let allClientPolicies = []
    userDetails.data.forEach(c => {
      allClientPolicies.push({
      id: c.id,
      name: c.name,
      email: c.email,
      role: c.role,
      policies: policyList.data.filter(p => p.clientId === c.id)
                .map(x => {return {
                  id: x.id,
                  amountInsured: x.amountInsured,
                  inceptionDate: x.inceptionDate
                }})
      })
    })

    if(req.query){
      const {page,limit} = await utils.pagination(req.query.page, req.query.limit)
      allClientPolicies = allClientPolicies.slice(page,limit)
    }else{
      allClientPolicies = allClientPolicies.slice(0,10)
    }

    return allClientPolicies
  }
}

export default {
  getUserData
}