'use strict'


Project.all = [];


function Project (dataArray) {
  this.title = dataArray.title;
  this.date = dataArray.date;
  this.screenShot = dataArray.screenShot;
  this.id = dataArray.id;
  this.description = dataArray.description;
  this.projectUrl = dataArray.projectUrl;
  this.nextId = dataArray.id +1;
}


Project.prototype.toScript = function() {
  var template = $( '#project-template' ).html();
  var templateFiller = Handlebars.compile( template );


  

  var filledTemplate = templateFiller( this );

  $('#home-projects' ).append( filledTemplate );

};

dataArray.forEach(function (projectObject){
  projectsArray.push(new Project(projectObject));

});


projectsArray.forEach(function (Project){
  $('#home-projects').append(Project.toScript());
 

});

