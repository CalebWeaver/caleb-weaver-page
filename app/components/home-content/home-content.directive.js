(function(){
	'use strict';

	angular.module('personalSite').directive('homeContent', function() {
		return {
            replace: true,
			templateUrl: 'app/components/home-content/home-content.view.html',
			controller: homeContentController,
			controllerAs: 'homeContent'
		};
	});

	function homeContentController() {
		var vm = this;
	}
})();