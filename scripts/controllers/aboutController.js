'use strict';

(function (module) {
  const aboutController = {};

  aboutController.init = function() {
    console.log("aboutController")
    $('.tab-hide').hide();
    $('.about').fadeIn('slow');
  }

  module.aboutController = aboutController
}) (app);