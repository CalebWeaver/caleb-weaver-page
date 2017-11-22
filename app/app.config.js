(function() {
	'use strict';

	angular.module('personalSite')
		.constant(
			'dividerImages', [
	        	{
	        		link: "http://t1na.deviantart.com/art/Fireflies-598842255",
	        		source: "http://pre03.deviantart.net/382a/th/pre/f/2016/085/5/b/fireflies_by_t1na-d9wj9n3.jpg",
	        		style: "first-image"
	        	},
	        	{
	        		link: "http://gate-to-nowhere.deviantart.com/art/Black-Hole-Rising-207545791",
	        		source: "http://img10.deviantart.net/a8ef/i/2011/124/3/6/black_hole_rising_by_gate_to_nowhere-d3fkfcv.jpg",
	        		style: "second-image"
	        	},
	        	{
	        		link: "https://www.artstation.com/artwork/YgXk6",
	        		source: "https://cdnb1.artstation.com/p/assets/images/images/003/557/573/large/guillem-h-pongiluppi-guillemhk-the-librarian.jpg?1474991601",
	        		style: "third-image"
	        	},
	        	{
	        		link: "http://yuumei.deviantart.com/art/Re-Imagine-381363630",
	        		source: "http://orig03.deviantart.net/3cbd/f/2013/179/d/0/re_imagine_by_yuumei-d6b1y26.jpg",
	        		style: "fourth-image"
	        	}
			])
		.constant(
			'portfolioProjects', [
        	{
        		name: 'Smart Mirror',
        		desc: 'I led the team to develop a touchscreen full-length mirror for integrating the fitting room experience. The mirror used Bluetooth LE beacons to track items the user interacted with, and had an interface written in Angular to supply user with recommended items, shopping cart, and additional features.',
        		images: ['assets/img/smart-mirror/smart-mirror-1.jpg']
        	},
        	{
        		name: 'DART App',
        		desc: 'An android native application made as a tool to directly recruit potential hires.',
        		link: 'https://play.google.com/store/apps/details?id=com.acumen.android.dart&hl=en',
        		images: ['assets/img/dart/application.webp',
        		'assets/img/dart/home.webp',
        		'assets/img/dart/menu.webp',
        		'assets/img/dart/position.webp']
        	}
        ]);
})();