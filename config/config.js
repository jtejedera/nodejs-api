export default {
    'port': process.env.NODE_PORT || 3000,
    'clientList' : 'http://www.mocky.io/v2/5808862710000087232b75ac',
    'policyList' : 'http://www.mocky.io/v2/580891a4100000e8242b75c5',
    'API_URL': 'https://dare-nodejs-assessment.herokuapp.com/api/',
    'API_KEY': 'PvBAxs8HsDyiTn6GUeCyaF6uaWp59H',
    'redis': {
      host: process.env.REDIS_SERVER || 'localhost',
      port: process.env.REDIS_PORT || 6379
    },
    'users': [
      {
        "id":"a0ece5db-cd14-4f21-812f-966633e7be86",
        "name":"Britney",
        "email":"britneyblankenship@quotezart.com",
        "password": 123456,
        "role":"admin"
      },
      {
        "id":"a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
        "name":"Barnett",
        "email":"barnettblankenship@quotezart.com",
        "password": 654321,
        "role":"user"        
      }
    ]
  };
  