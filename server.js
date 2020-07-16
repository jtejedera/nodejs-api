import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
import config from './config/config.js';
import session from 'express-session'

const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	name: 'node-js-assessment',
	secret: 'secretTestKey',
	saveUninitialized: true,
	resave: true,
	  cookie: {
		secure: false,
		maxAge: 2160000000,
		httpOnly: false
	}
  }));

app.use('',(req, res, next) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader('Access-Control-Allow-Headers', 'x-access-token, X-Requested-With,content-type, Authorization, Access-Control-Request-Headers');

	if ('OPTIONS' == req.method) return res.json({ success: false, data: {}, message: "Method not allowed."});
	else next();
});

app.use('/api/v1', apiRoutes(express));

app.get('*', (req, res) => {
    res.json({ success: true, data: {}, message: "Node.js API"});
});

app.listen(config.port);
console.log(`Server started: ${config.port}`);