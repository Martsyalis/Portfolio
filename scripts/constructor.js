'use strict'


var projectsArray = [];


console.log('data array',dataArray);

function Project (dataArray) {
  this.title = dataArray.title;
  this.date = dataArray.date;
  this.screenShot = dataArray.screenShot;
  this.id = dataArray.id;
}

Project.prototype.toScript = function() {
  var $newProject = $('.project-template').clone();
  $newProject.removeClass('project-template');
  $newProject.addClass('generated-project');
  $newProject.attr('id', this.id);
  $newProject.find('img').attr('src',this.screenShot);
  $newProject.find('.project-title').text(this.title);
  $newProject.find('.project-date').text(this.date);
  $newProject.find('.project-description').text(this.description);
  $newProject.find('.id').attr('href',`#${this.id+1}`)
  console.log("new project",$newProject);
  return $newProject;
};


dataArray.forEach(function (projectObject){
  projectsArray.push(new Project(projectObject));

});
//console.log('projects array',projectsArray);

projectsArray.forEach(function (Project){
  $('.home').append(Project.toScript());
  //console.log('project',Project);

});

