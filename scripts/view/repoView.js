"use strict";

app = app || {};

(function (module) {
  const repoView = {};


  const render = Handlebars.compile($('#github-template').text());

  repoView.index = function() {
    console.log ("repoView running")
    $('#github').append(
      app.repos.with('description').map(render)
    );
  };



  module.repoView = repoView; 

})(app);