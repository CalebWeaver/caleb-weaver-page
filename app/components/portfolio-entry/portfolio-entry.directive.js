(function(){
	'use strict';

	angular.module('personalSite').component('portfolioEntry', {
		templateUrl: 'app/components/portfolio-entry/portfolio-entry.view.html',
		controller: PortfolioEntryController,
		bindings: {
			portfolioProject: '='
		}
	});

	function PortfolioEntryController() {
		var vm = this;
	}
})();