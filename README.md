# NODE.JS API #

Simple Node.JS Project. It include tests, generated documentation using apiDoc (https://apidocjs.com/), Docker file and Docker Compose.

IMPORTANT: You need a Redis server running. Default config in ./config/config.js or use Docker to run both, API and Redis server.

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
```
npm run test-dev
```

## Docker
Build the API image
```
docker image build -t node_api -
```

Then you can run docker-compose up
```
docker-compose up
```
