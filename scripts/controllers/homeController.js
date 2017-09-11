'use strict';

(function (module) {
  const homeController = {};

  homeController.init = function() {
    console.log("homeController")
    $('.tab-hide').hide();
    $('.home').fadeIn('slow');
  }

  module.homeController = homeController
}) (app);