(function () {
    'use strict';

	angular.module('personalSite').directive('footer', function(){
		return{
            replace: true,
			templateUrl: 'app/components/footer/footer.view.html',
			controller: footerDirectiveController,
			controllerAs: 'footer'
		}
	});

	function footerDirectiveController(){
		var vm = this;
	}
})();
