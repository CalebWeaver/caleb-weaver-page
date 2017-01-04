(function(){
	'use strict';

	angular.module('personalSite').component('imageDivider', {
		templateUrl: 'app/components/image-divider/image-divider.view.html',
		controller: ImageDividerController,
		bindings: {
			image: '='
		}
	});

	function ImageDividerController() {
		var vm = this;
	}
})();