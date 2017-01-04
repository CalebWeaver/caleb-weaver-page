/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('personalSite')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	    // any unknown URLS go to 404
		$urlRouterProvider.otherwise('/home');
	    // no route goes to index
		$urlRouterProvider.when('', '/home');

	    // use a state provider for routing
	    $stateProvider.state('home', {
	    	url: '/home',
	    	templateUrl: 'app/pages/home/home.view.html',
	    	controller: 'HomeController',
	    	controllerAs: 'ctrl'
	    }).state('dev', {
	    	url: '/dev',
	    	templateUrl: 'app/pages/dev/dev.view.html',
	    	controller: 'DevController',
	    	controllerAs: 'ctrl'
	    }).state('write', {
	    	url: '/write',
	    	templateUrl: 'app/pages/write/write.view.html'
	    });
	}]);