import { Request, Response } from 'express';
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const cors = require('cors');

const users = require('./api/modules/users/users.controller');




console.info(`Starting server on http://localhost:${PORT}`);

// parse application/json
app.use(bodyParser.json())
// cors
app.use(cors({
    //TODO: (note: don't use '*' in production)
    origin: PORT,
}));
// add routes for controllers
app.use('/users', users);

app.listen(PORT);

console.info(`Starting server on http://localhost:${PORT}`);
