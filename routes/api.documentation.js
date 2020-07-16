/**
 * @api {post} /login Get Token
 * @apiHeader {String} authentication Bearer Token
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEyOTgsImV4cCI6MTU5NDkwMjA5OH0.DlyVa8cAcrb5N8HgZ-1eakyChNJ9zGN6vRgttAnS9Xs"
 *     }
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {username} String Must be the email of the user.
 * @apiParam {password} String Must be the password of the user (default '123456').
 *
 * @apiSuccess {String} Type Type of the Token.
 * @apiSuccess {String} Token  JWT Token.
 * @apiSuccess {Number} expires_in  Expiration date.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc",
 *           "type": "Bearer",
 *           "expires_in": 1594901825
 *       }
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": false,
 *         "data": {},
 *         "message": "Incorrect login."
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
 * @api {get} /clients Get the list of clients details paginated and limited to 10 elements by default.
 * @apiDescription This API endpoint access also an optional filter query to filter by client name. Can be accessed by client with role user (it will retrieve its own client details as only element of the list) and admin (it will retrieve all the clients list). 
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName clientData
 * @apiGroup Client
 *
 * @apiParam {number} limit Limit the numer of results.
 * @apiParam {number} page Select the results page.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Object} data  Data of the query.
 * @apiSuccess {ObjectId} data.id  ID of the client.
 * @apiSuccess {String} data.name  Name of the client.
 * @apiSuccess {String} data.email  Email of the client.
 * @apiSuccess {String} data.role  Role of the client.
 * @apiSuccess {Array} policies  Array list of client policies.
 * @apiSuccess {ObjectId} policies.id  Array list of client policies.
 * @apiSuccess {String} policies.amountInsured  Policy amountInsured.
 * @apiSuccess {String} policies.inceptionDate  Policy inceptionDate.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
 *                   "name": "Britney",
 *                   "email": "britneyblankenship@quotezart.com",
 *                   "role": "admin",
 *                   "policies": [
 *                       {
 *                           "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
 *                           "amountInsured": "399.89",
 *                           "inceptionDate": "2015-07-06T06:55:49Z"
 *                       },
 *                   ]
 *              }
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
 * @api {get} /clients/:id Get the client's details.
 * @apiDescription Can be accessed by client with role user (it will retrieve its own client details) and admin (it will retrieve any client details). Can be use id or name.
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName clientData
 * @apiGroup Client
 *
 * @apiParam {ObjectId} id Id of the client (id=1470c601-6833-48a4-85b4-ddab9c045916)
 * @apiParam {ObjectId} name Or the name of the client (name=Barnett)
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Object} data  Data of the query.
 * @apiSuccess {ObjectId} data.id  ID of the client.
 * @apiSuccess {String} data.name  Name of the client.
 * @apiSuccess {String} data.email  Email of the client.
 * @apiSuccess {String} data.role  Role of the client.
 * @apiSuccess {Array} policies  Array list of client policies.
 * @apiSuccess {ObjectId} policies.id  Array list of client policies.
 * @apiSuccess {String} policies.amountInsured  Policy amountInsured.
 * @apiSuccess {String} policies.inceptionDate  Policy inceptionDate.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
 *                   "name": "Britney",
 *                   "email": "britneyblankenship@quotezart.com",
 *                   "role": "admin",
 *                   "policies": [
 *                       {
 *                           "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
 *                           "amountInsured": "399.89",
 *                           "inceptionDate": "2015-07-06T06:55:49Z"
 *                       },
 *                   ]
 *              }
 *         "message": "User details."
 *     }
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": {},
 *         "message": "No client found"
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
 * @api {get} /clients/:id/policies Get the client's policies.
 * @apiDescription  Can be accessed by client with role user (it will retrieve its own client policy list) and admin (it will retrieve any client policy list)
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName clientData
 * @apiGroup Client
 *
 * @apiParam {ObjectId} id Id of the client (id=1470c601-6833-48a4-85b4-ddab9c045916)
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Array} data  Client policies array.
 * @apiSuccess {ObjectId} data.id  ID of the policy.
 * @apiSuccess {String} data.amountInsured  Policy amountInsured.
 * @apiSuccess {String} data.email  Client email.
 * @apiSuccess {String} data.inceptionDate  Policy inceptionDate.
 * @apiSuccess {String} data.installmentPayment  Policy installmentPayment.
 * @apiSuccess {String} data.clientId  Policy client ID.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
 *                   "amountInsured": "1825.89",
 *                   "email": "inesblankenship@quotezart.com",
 *                   "inceptionDate": "2016-06-01T03:33:32Z",
 *                   "installmentPayment": true,
 *                   "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
 *               }
 *           ]
 *         "message": "Policy details."
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
 * @api {get} /policies Get the list of policies' client paginated and limited to 10 elements by default.
 * @apiDescription Can be accessed by client with role user (it will retrieve its own policies) and admin (it will retrieve all the policies)
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName policyData
 * @apiGroup Policies
 *
 * @apiParam {number} limit Limit the numer of results.
 * @apiParam {number} page Select the results page.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Array} data  Client policies array.
 * @apiSuccess {ObjectId} data.id  ID of the policy.
 * @apiSuccess {String} data.amountInsured  Policy amountInsured.
 * @apiSuccess {String} data.email  Client email.
 * @apiSuccess {String} data.inceptionDate  Policy inceptionDate.
 * @apiSuccess {String} data.installmentPayment  Policy installmentPayment.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
 *                   "amountInsured": "1825.89",
 *                   "email": "inesblankenship@quotezart.com",
 *                   "inceptionDate": "2016-06-01T03:33:32Z",
 *                   "installmentPayment": true,
 *               }
 *           ]
 *         "message": "Policy details of user ID 64cceef9-3a01-49ae-a23b-3761b604800b"
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
 * @api {get} /policies/:id Get the details of a policy's client.
 * @apiDescription Can be accessed by client with role user (it will retrieve its own policy) and admin (it will retrieve all the policies)
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName policyData
 * @apiGroup Policies
 *
 * @apiParam {ObjectID} ID of the policy.
 *
 * @apiSuccess {Boolean} success Status of the operation.
 * @apiSuccess {Array} data  Client policies array.
 * @apiSuccess {ObjectId} data.id  ID of the policy.
 * @apiSuccess {String} data.amountInsured  Policy amountInsured.
 * @apiSuccess {String} data.email  Client email.
 * @apiSuccess {String} data.inceptionDate  Policy inceptionDate.
 * @apiSuccess {String} data.installmentPayment  Policy installmentPayment.
 * @apiSuccess {String} Message  Message of the operation.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success": true,
 *         "data": [
 *               {
 *                   "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
 *                   "amountInsured": "1825.89",
 *                   "email": "inesblankenship@quotezart.com",
 *                   "inceptionDate": "2016-06-01T03:33:32Z",
 *                   "installmentPayment": true,
 *               }
 *           ]
 *         "message": "Policy details"
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