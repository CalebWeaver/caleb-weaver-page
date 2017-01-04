(function () {
    'use strict';

	angular.module('personalSite').directive('header', function(){
		return{
            replace: true,
			templateUrl: 'app/components/header/header.view.html',
			controller: headerDirectiveController,
			controllerAs: 'header'
		}
	});

	function headerDirectiveController(){
		var vm = this;
	}
})();
