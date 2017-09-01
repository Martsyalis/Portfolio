'use strict'


var indexView = {};

$(document).ready(function(){
  
  indexView.mainNav();
  indexView.primer();
  indexView.scroll();


});

indexView.primer = function(){
  $('.about').hide();
  $('.project-template').hide();
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

//        NOT WORKING     

indexView.scroll = function(){
  $('generated-project').on('click','#id', function(){
    var clicked = $(this);
    var nextId = clicked.getParent().next().attr("id");
    console.log(clicked);
    console.log("nextId", nextId);

    //clickTarget.attr('href', "'" + nextId +"'");

  });

};
