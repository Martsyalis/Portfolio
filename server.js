'use strict'

const pg = require('pg');
const express = require ( 'express' );
const app = express();
const PORT = process.env.PORT || 2000;
require('dotenv').config();
const requestProxy = require('express-request-proxy');


//const client = new pg.Client(process.env.DATABASE_URL);

function getGithubProxy(request,response){
  ( requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request,response)
}
  

app.get('/github/*', getGithubProxy)


app.use( express.static ('.'));

app.listen(PORT, function(){
  console.log(PORT); 

});