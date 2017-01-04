(function() {
    'use strict';

    angular.module('personalSite').controller('HomeController', HomeController);

    function HomeController(dividerImages) {
        var vm = this;
        vm.images = dividerImages;

        activate();

        function activate() {
            $(document).on('scroll', function() {
                var body = document.body,
                    html = document.documentElement;

                var height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

                var scrollPercent = $(document).scrollTop() / height;
                $('.divider-image').each(function() {
                    $(this).css('margin-top', ($(this).height()) * scrollPercent * -1 + 'px');
                });
            });
        }
    }
})();