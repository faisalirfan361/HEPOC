define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard2', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard2', {
                url: '/dashboard2',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard2/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard2/DashboardCtrl',
                                'modules/graphs/directives/inline/sparklineContainer',
                                'modules/graphs/directives/inline/easyPieChartContainer',
                                'modules/graphs/directives/morris/morrisDonutGraph',
                                'modules/graphs/directives/chartjs/chartjsDoughnutChart',
                                'components/chat/directives/chatWidget',
                                'components/chat/directives/chatUsers',
                                'modules/graphs/directives/vectormap/vectorMap',
                                'modules/graphs/directives/flot/flotBasic'
                            ])
                        }
                    }
                },
                data:{
                    title: 'Dashboard2'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});