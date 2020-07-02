# NODE.JS API #

Simple Node.JS Project. It include tests, generated documentation using apiDoc (https://apidocjs.com/), Docker file and Docker Compose.

**IMPORTANT**: For local test you need a **Redis server running**. Default config in ./config/config.js. 

**RECOMENDATION**: Use Docker to run both, API and Redis server, check Docker section.

## NOTES 
* I added Babel to use `import` and avoid to add `-experimental-modules` flag.
* Send the request to the API using the header `x-access-token` with value of a user ID. It simulates a Token and it will be validated in the API UAC controller.

## API Documentation
Open the API documentation Index file.
```
./apidoc/index.html
```

## Project setup
```
npm install
```

### Start the API
```
npm start
```

### Run Tests
1. HTTP endpoints
2. Services
```
npm run test-dev
```
![Screenshot](tests.png)

## Docker
Build the API image
```
docker image build -t node_api .
```

Then you can run docker-compose up
```
docker-compose up
```