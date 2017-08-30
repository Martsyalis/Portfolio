'use strict'

projectsArray = [];

function project (dataArray) {
this.title = progectArray.title;
this.date = progectArray.date;
this.screenShot = progectArray.screenShot;
}

project.prototype.toScript = function(){
    var $newProject = $(".project-template").clone();
    $newProject.removeClass("project-template");

     

} 

dataArray.forEach(function (projectObject){
    projectsArray.push(new project( projectObject));

});

projectsArray.forEach(function (project){
    $(projects).append(project.toScript);


})

