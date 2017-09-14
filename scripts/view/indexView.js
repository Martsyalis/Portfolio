'use strict'

var app = app || {};

(function ( module ) {
  const indexView = {};
  
  indexView.primer = function(){
    $('.about').hide();
  };

  module.indexView = indexView;
})(app);
