'use strict';

(function (module) {
  const aboutController = {};

  aboutController.init = function() {
    console.log("aboutController")
    $('.tab-hide').hide();
    $('.about').fadeIn('slow');
    app.repos.requestRepos(app.repoView.index);
  }

  module.aboutController = aboutController
}) (app);