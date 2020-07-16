import request from '../utils/requests'
import utils from '../utils/pagination'

const policyList = async req => {
  try {
    let policyList = await request.requestQuery('policies',req.session.token)
    if(req.reqUser.role != 'admin') {
      policyList.data =  policyList.data.filter( x => 
        {
        if(x.clientId === req.reqUser.id) {
          delete x.clientId
          policyData.push(x)
        }
      })
    }

    return { success: true, data: policyList.data.length?policyList.data:{}, message: policyList.data.length?`Policies details.`:`No policies found.`}
  }
  catch (error){
    return { success: false, data: {}, message: `Error: ${error}`}
  }
}

const policyId = async req => {
  try {
    let policyList = await request.requestQuery('policies',req.session.token)
    if(req.reqUser.role != 'admin') {
      policyList.data =  policyList.data.filter( x => x.clientId === req.reqUser.id && req.params.id === x.id)
    }else{
      policyList.data = policyList.data.filter( x => x.id === req.params.id)
    }

    return { success: true, data: policyList.data?policyList.data:{}, message: policyList.data?`Policies details.`:`No policies found.`}

  }
  catch (error){
    const policyList =  await request.errorHandler('policies',error, req)
    if(req.reqUser.role != 'admin') {
      policyList.data =  policyList.data.find( x => x.clientId === req.reqUser.id && req.params.id === x.id)
    }else{
      policyList.data = policyList.data.find( x => x.id === req.params.id)
    }

    return { success: true, data: policyList.data?policyList.data:{}, message: policyList.data?`Policies details.`:`No policies found.`}
  }
}

const policyUser = async req => {
  try {
    const policyList = await request.requestQuery('policies',req.session.token)

    let policyData = [] 
    if(req.reqUser.role === 'admin'){
      policyData = await formatResult(policyList.data,req)
    }else{
      policyData = await formatResult(policyList.data.filter(p => p.clienId === req.reqUser.id),req)
    }

    if(!policyData.length) return { success: true, data: {}, message: `No policy found`}

    return { success: true, data: policyData, message: `Policy details` }
  }
  catch (error){
    const policyList =  await request.errorHandler('policies',error, req)

    let policyData = [] 
    if(req.reqUser.role === 'admin'){
      policyData = await formatResult(policyList.data,req)
    }else{
      policyData = await formatResult(policyList.data.filter(p => p.clienId === req.reqUser.id),req)
    }

    if(!policyData) return { success: true, data: {}, message: `No policy found`}

    return { success: true, data: policyData, message: `Policy details` }    
  }
}

const formatResult = async (dataList, req) => {
  let policyData = []

  dataList.filter( x => 
    {
      delete x.clientId
      policyData.push(x)
    }
  )

  if(req.query){
    const {page,limit} = await utils.pagination(req.query.page, req.query.limit)
    policyData = policyData.slice(page,limit)
  }else{
    policyData = policyData.slice(0,10)
  }  

  return policyData
}

export default {
  policyList,
  policyUser,
  policyId
}