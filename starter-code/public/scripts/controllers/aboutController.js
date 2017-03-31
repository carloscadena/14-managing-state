'use strict';

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (This function starts the sequence of rendering the github repos to the about section of the blog. It hides the previous text and shows the repo names. It calls repos.requestRepos located in repos.js.)

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
