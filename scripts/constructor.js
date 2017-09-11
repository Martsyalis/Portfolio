'use strict'

var app = app || {};

(function ( module ) {
  Project.all = [];

  function Project ( dataArray ) {

    Object.keys(dataArray).forEach(function(key){
      this[key]= dataArray[key];
    },this);
    this.nextId = dataArray.id +1;
    this.previousId = dataArray.id -1;
  }


  Project.prototype.toScript = function() {
    var template = $( '#project-template' ).html();
    var templateFiller = Handlebars.compile( template );
    return templateFiller ( this );
  };

  Project.loadAll = function( dataArray ){
    dataArray.forEach(function( element ) {
      Project.all.push(new Project( element ));
    })

    Project.all.forEach(function( projectObject ){
      $( '#home-projects' ).append( projectObject.toScript() );
    })
  }


  Project.fetchAll = function() {
    if (localStorage.data) {
      console.log( "on local storage" );
      Project.loadAll(JSON.parse( localStorage.data ));

    } else {
      console.log( 'on JSON' );
      $.getJSON( './scripts/data.json' )
        .done (function ( data ){
          //localStorage.setItem ('data',JSON.stringify( data ) );
          Project.loadAll ( data );
        });
    }
  }

  module.Project = Project;
})(app);

$(document).ready(function(){
  app.Project.fetchAll();
});




