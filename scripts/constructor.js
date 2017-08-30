'use strict'


var projectsArray = [];

var dataArray = [
  {
    title : 'Motorcycle website',
    date : '08.26.2017',
    screenShot: './pics/sv.jpg'

  } 
]

console.log('data array',dataArray);

function Project (dataArray) {
  this.title = dataArray.title;
  this.date = dataArray.date;
  this.screenShot = dataArray.screenShot;
}

Project.prototype.toScript = function() {
  var $newProject = $('.project-template').clone();
  $newProject.removeClass('project-template');

  $newProject.find('img').attr('src',this.screenShot);
  $newProject.find('.project-title').text(this.title);
  $newProject.find('.project-date').text(this.date);
  $newProject.find('.project-description').text(this.description);
  return $newProject;
};


dataArray.forEach(function (projectObject){
  projectsArray.push(new Project(projectObject));

});
console.log('projects array',projectsArray);

projectsArray.forEach(function (Project){
  $('.project-template').append(Project.toScript());
  console.log('project',Project);

});

