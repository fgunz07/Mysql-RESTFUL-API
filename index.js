const express = require('express'),
	app = express(),
	Parser = require('body-parser'),
	mysql = require('mysql'),
	dbConnect = require('./config')(mysql),
	route = require('./route/routes')(app, express, dbConnect);

	app.use(Parser.urlencoded({ extended: true }));
	app.use(Parser.json());

	app.get('/', (req, res)=>{
		res.send('Home page NodeJS');
	});

	app.use('/api', route);

	app.listen(8080, ()=>{
		console.log('server running');
	});