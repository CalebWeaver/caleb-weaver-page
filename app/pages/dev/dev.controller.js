(function() {
    'use strict';

    angular.module('personalSite').controller('DevController', DevController);

    function DevController(portfolioProjects, dividerImages) {
        var vm = this;
        vm.portfolioProjects = portfolioProjects;
        vm.dividerImages = dividerImages;
    }
})();