(function () {
    'use strict';

	angular.module('personalSite').directive('navigation', function(){
		return{
            replace: true,
			templateUrl: 'app/components/navigation/navigation.view.html',
			controller: navigationDirectiveController,
			controllerAs: 'navigation'
		}
	});

	function navigationDirectiveController(){
		var vm = this;
	}
})();
