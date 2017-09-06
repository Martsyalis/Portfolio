'use strict'

const express = require ( 'express' );
const app = express();
const PORT = process.env.PORT || 2000;

app.use( express.static ('.'));

app.listen(PORT, function(){
  console.log(PORT); 

});