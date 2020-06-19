/**
 * @api {get} /user/:userId Get User Data
 * @apiName userData
 * @apiGroup User
 *
 * @apiParam {ObjectId} userId Users unique ID or user Name in the next format: /user/id=0178914c-548b-4a4c-b918-47d6a391530c or /user/name=Whitley.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Object} data  Data of the query.
 * @apiSuccess {ObjectId} data.id  ID of the client.
 * @apiSuccess {String} data.name  Name of the client.
 * @apiSuccess {String} data.email  Email of the client.
 * @apiSuccess {String} data.role  Role of the client.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {
 *             "id": "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
 *             "name": "Barnett",
 *             "email": "barnettblankenship@quotezart.com",
 *             "role": "user"
 *         },
 *         "message": "User details."
 *     }
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {},
 *         "message": "No user found"
 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {
 *           "success": false,
 *           "data": {},
 *           "message": "Error Message"
 *     }
 */

/**
 * @api {get} /policyList/:userId Get Policy List of a given user ID
 * @apiName policyData
 * @apiGroup Policies
 *
 * @apiParam {ObjectId} userId Users unique ID.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Array} data  Array with all the policies related to given user ID.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
 *                   "amountInsured": 399.89,
 *                   "email": "inesblankenship@quotezart.com",
 *                   "inceptionDate": "2015-07-06T06:55:49Z",
 *                   "installmentPayment": true,
 *                   "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
 *               },
 *               {
 *                   "id": "6f514ec4-1726-4628-974d-20afe4da130c",
 *                   "amountInsured": 697.04,
 *                   "email": "inesblankenship@quotezart.com",
 *                   "inceptionDate": "2014-09-12T12:10:23Z",
 *                   "installmentPayment": false,
 *                   "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
 *               }
 *           ],
 *         "message": "Policies details."
 *     }
 * 
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {},
 *         "message": "No policies found"
 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {
 *           "success": false,
 *           "data": {},
 *           "message": "Error Message"
 *     }
 */   

/**
 * @api {get} /policyUser/:policyNumber Get User details of a given Policy Number
 * @apiName policyData
 * @apiGroup Policies
 *
 * @apiParam {ObjectId} policyNumber Policy unique ID.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Array} data  Array with all the policies related to given user ID.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {
 *             "id": "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
 *             "name": "Barnett",
 *             "email": "barnettblankenship@quotezart.com",
 *             "role": "user"
 *         },
 *         "message": "User details of policy 5d6b141e-0d22-4a84-abdb-6200ddaad7d0"
 *     }
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {},
 *         "message": "No policy found"
 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {
 *           "success": false,
 *           "data": {},
 *           "message": "Error Message"
 *     }
 */  