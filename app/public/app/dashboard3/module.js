define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard3', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard3', {
                url: '/dashboard3',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard3/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard3/DashboardCtrl',
                                'modules/graphs/directives/inline/sparklineContainer',
                                'modules/graphs/directives/inline/easyPieChartContainer',
                                'modules/graphs/directives/morris/morrisDonutGraph',
                                'modules/graphs/directives/chartjs/chartjsDoughnutChart',
                                'modules/graphs/directives/chartjs/chartjsPieChart',
                                'components/chat/directives/chatWidget',
                                'components/chat/directives/chatUsers',
                                'modules/graphs/directives/vectormap/vectorMap',
                                'modules/graphs/directives/flot/flotBasic'
                            ])
                        }
                    }
                },
                data:{
                    title: 'Dashboard3'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});