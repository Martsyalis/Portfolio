'use strict'


var indexView = {};

$(document).ready(function(){
  
  indexView.mainNav();
  indexView.primer();

});

indexView.primer = function(){
  $('.about').hide();
  //$('.project-template').hide();
};




indexView.mainNav = function(){
  $('.main-nav').on('click','.tab', function(){
    $('.tab-hide').hide();
    var clickTarget = $(this).attr('data-tab');
    // console.log(+clickTarget);
    // console.log('section[data-tab='+clickTarget+']');
    $('section[data-tab="'+clickTarget+'"]').fadeIn('medium');



  });
};

