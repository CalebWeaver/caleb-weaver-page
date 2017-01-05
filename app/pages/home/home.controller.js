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

                var scrollPercent = $(document).scrollTop() / (height - document.documentElement.clientHeight);
                console.log(scrollPercent);
                $('.divider-image').each(function() {
                    var maxScrollable = $(this).height() - 100;
                    $(this).css('margin-top',  maxScrollable * (scrollPercent * .9) * -1 + 'px');
                });
            });
        }
    }
})();