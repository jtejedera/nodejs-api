import { userData, policyData, uac, auth } from '../controllers/index.js';

module.exports = (express) => {

    const apiRouter = express.Router();
    

    apiRouter.post('/login', auth.login);
    
    apiRouter.get('/clients/:id?', uac.checkRole(['user','admin']),userData.getUserData);
    apiRouter.get('/clients/:id/policies', uac.checkRole(['user','admin']),policyData.policyUser);  
    apiRouter.get('/policies/:id?', uac.checkRole(['user','admin']),policyData.policyUser);    

    return apiRouter
}