(function() {
	'use strict';

	angular.module('personalSite').component('spotifyPlayer', {
		templateUrl: 'app/components/spotify-player/spotify-player.view.html',
		controller: SpotifyPlayerController
	});

	function SpotifyPlayerController() {
		var vm = this;
	}
})();