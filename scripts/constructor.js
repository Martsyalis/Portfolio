'use strict'

projectsArray = [];

function Project (dataArray) {
    this.title = dataArray.title;
    this.date = dataArray.date;
    this.screenShot = dataArray.screenShot;
}

Project.prototype.toScript = function(){
    var $newProject = $('.project-template').clone();
    $newProject.removeClass('project-template');

    $newProject.find('.project-screenshot').attr('src',this.screenShot);
    $newProject.find('.project-title').text(this.title);
    $newProject.find('.project-date').text(this.date);
    $newProject.find('.project-description').text(this.description);
};

dataArray.forEach(function (projectObject){
    projectsArray.push(new project( projectObject));

});

projectsArray.forEach(function (project){
    $('projects').append(Project.toScript());


})

