'use stric'

var express = require('express');
var bodyParse = require('body-parser');
var fileUpload = require('express-fileupload')

var app = express();
// app.use(fileUpload({
//     createParentPath: true
// }));

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Access-Control-Allow-Credentials', 'false');
	next();
});

var project_router = require('./routes/projectRouter');
var equipProject_router = require('./routes/sizingRouter');

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(fileUpload())

app.use('/v1', project_router);
app.use('/v1', equipProject_router);

module.exports = app;