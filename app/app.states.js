/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('personalSite')
	.config(['$stateProvider', 'urlRouteProvider', function($stateProvider, $urlRouteProvider) {

	    // any unknown URLS go to 404
		$urlRouteProvider.otherwise('/home');
	    // no route goes to index
		$urlRouteProvider.when('', '/home');

	    // use a state provider for routing
	    $stateProvider.state('home', {
	    	url: '/home',
	    	templateUrl: 'app/pages/home/home.view.html',
	    	controller: 'homeController',
	    	controllerAs: 'vm'
	    });
	}]);