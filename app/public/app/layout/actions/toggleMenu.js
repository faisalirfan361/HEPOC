define(['layout/module'], function (module) {
    "use strict";

    module.registerDirective('toggleMenu', function(){
        return {
            restrict: 'A',
            link: function(scope, element){
                var $body = $('body');

                /*if (scope.$state.current.name === "app.setup"){
                    $(element[0]).hide();
                    $('html').toggleClass("hidden-menu-mobile-lock");
                    $body.removeClass("minified");
                    return;
                }
                else{
                    $body.toggleClass("hidden-menu");
                }*/

                var toggleMenu = function(){
                    if (!$body.hasClass("menu-on-top")){
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $body.toggleClass("hidden-menu");
                        $body.removeClass("minified");
                    } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $body.toggleClass("hidden-menu");
                        $body.removeClass("minified");
                    }
                };

                element.on('click', toggleMenu);

                scope.$on('requestToggleMenu', function(){
                    toggleMenu();
                });
            }
        }
    })

});
