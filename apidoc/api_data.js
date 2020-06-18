define({ "api": [
  {
    "type": "get",
    "url": "/policyList/:userId",
    "title": "Get Policy List of a given user ID",
    "name": "policyData",
    "group": "Policies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Status of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array with all the policies related to given user ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": [\n          {\n              \"id\": \"7b624ed3-00d5-4c1b-9ab8-c265067ef58b\",\n              \"amountInsured\": 399.89,\n              \"email\": \"inesblankenship@quotezart.com\",\n              \"inceptionDate\": \"2015-07-06T06:55:49Z\",\n              \"installmentPayment\": true,\n              \"clientId\": \"a0ece5db-cd14-4f21-812f-966633e7be86\"\n          },\n          {\n              \"id\": \"6f514ec4-1726-4628-974d-20afe4da130c\",\n              \"amountInsured\": 697.04,\n              \"email\": \"inesblankenship@quotezart.com\",\n              \"inceptionDate\": \"2014-09-12T12:10:23Z\",\n              \"installmentPayment\": false,\n              \"clientId\": \"a0ece5db-cd14-4f21-812f-966633e7be86\"\n          }\n      ],\n    \"message\": \"Policies details.\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {},\n    \"message\": \"No policies found\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n      \"success\": false,\n      \"data\": {},\n      \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "Policies"
  },
  {
    "type": "get",
    "url": "/policyUser/:policyNumber",
    "title": "Get User details of a given Policy Number",
    "name": "policyData",
    "group": "Policies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "policyNumber",
            "description": "<p>Policy unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Status of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array with all the policies related to given user ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": \"a3b8d425-2b60-4ad7-becc-bedf2ef860bd\",\n        \"name\": \"Barnett\",\n        \"email\": \"barnettblankenship@quotezart.com\",\n        \"role\": \"user\"\n    },\n    \"message\": \"User details of policy 5d6b141e-0d22-4a84-abdb-6200ddaad7d0\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {},\n    \"message\": \"No policy found\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n      \"success\": false,\n      \"data\": {},\n      \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "Policies"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "Get User Data",
    "name": "userData",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Status of the operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data of the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Name of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>Role of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": \"a3b8d425-2b60-4ad7-becc-bedf2ef860bd\",\n        \"name\": \"Barnett\",\n        \"email\": \"barnettblankenship@quotezart.com\",\n        \"role\": \"user\"\n    },\n    \"message\": \"User details.\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {},\n    \"message\": \"No user found\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n      \"success\": false,\n      \"data\": {},\n      \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "User"
  }
] });
