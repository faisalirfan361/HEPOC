define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-google-plus',
    'angular-easyfb'
], function (ng, couchPotato) {

    "use strict";

    var module = ng.module('app.setup', [
        'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
    ]);

    couchPotato.configureApp(module);

    var authKeys = {
        googleClientId: '678402726462-ah1p6ug0klf9jm8cplefmphfupg3bg2h.apps.googleusercontent.com',
        facebookAppId: '620275558085318'
    };

    module.config(function ($stateProvider, $couchPotatoProvider
//        , ezfbProvider
//        , GooglePlusProvider
        ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
        $stateProvider.state('setup', {
            url: '/setup',

            views: {
                root: {
                    templateUrl: "app/setup/setup.html",
                    controller: 'SetupCtrl',
                    resolve: {
                        deps: $couchPotatoProvider.resolveDependencies([
                            'setup/SetupCtrl',
                            'modules/graphs/directives/inline/sparklineContainer',
                            'modules/graphs/directives/inline/easyPieChartContainer',
                            'components/chat/directives/chatWidget',
                            'components/chat/directives/chatUsers',
                            'modules/graphs/directives/vectormap/vectorMap',
                            'modules/graphs/directives/flot/flotBasic'
                        ])
                    }
                }
            },
            data: {
                title: 'Setup',
                htmlId: 'extr-page'
            }

        });
 

    });

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });
    return module;
});