'use strict';

var app = app || {};

(function ( module ) {
  const repos = {};

  repos.all = [];


  repos.requestRepos = function(callback){
    console.log("requestRepos is running")
   
    $.ajax({
      url: '/github/user/repos',
      type: "GET"
    })
      
      .then(data => repos.all = data)
      
      .then(callback)
      .then(console.log(app.repos.all))
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app);

$(document).ready(function(){
  app.repos.requestRepos(app.repoView.Index);
});