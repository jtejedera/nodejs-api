export default {
    'port': process.env.NODE_PORT || 3000,
    'clientList' : 'http://www.mocky.io/v2/5808862710000087232b75ac',
    'policyList' : 'http://www.mocky.io/v2/580891a4100000e8242b75c5',
    'redis': {
      host: process.env.REDIS_SERVER || 'localhost',
      port: process.env.REDIS_PORT || 6379
    }    
  };
  