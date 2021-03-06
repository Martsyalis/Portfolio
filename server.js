'use strict'

const pg = require('pg');
const express = require ( 'express' );
const app = express();
const PORT = process.env.PORT || 2000;
require('dotenv').config();
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser');

//app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

//const client = new pg.Client(process.env.DATABASE_URL);

function getGithubProxy(request,response){
  console.log( 'Routing GitHub request for', request.params[0] );
  ( requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request,response)
}
  

app.get('/github/*', getGithubProxy);

app.use(express.static('.'));


app.listen(PORT, function(){
  console.log(PORT); 

});