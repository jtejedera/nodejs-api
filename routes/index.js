import { userData, policyData, uac } from '../controllers/index.js';

module.exports = (express) => {

    const apiRouter = express.Router();
    
    apiRouter.get('/user/:userId', uac.checkRole(['user','admin']), userData.getUserData);
    apiRouter.get('/policyList/:userId', uac.checkRole(['admin']), policyData.policyList);
    apiRouter.get('/policyUser/:policyNumber', uac.checkRole(['admin']), policyData.policyUser);

    return apiRouter
}