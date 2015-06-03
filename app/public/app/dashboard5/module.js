define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard5', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard5', {
                url: '/dashboard5',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard5/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard5/DashboardCtrl',
                                'modules/forms/directives/input/smartSelect2',
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
                data:{
                    title: 'Dashboard5'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});