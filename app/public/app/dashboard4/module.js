define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard4', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard4', {
                url: '/dashboard4',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard4/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard4/DashboardCtrl',
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
                    title: 'Dashboard4'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});