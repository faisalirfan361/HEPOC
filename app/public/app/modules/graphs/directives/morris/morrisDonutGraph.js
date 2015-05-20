define(['modules/graphs/module', 'morris'], function(module){

    "use strict";

    return module.registerDirective('morrisDonutGraph', function(){
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="chart no-padding"></div>',
            link: function(scope, element){

                Morris.Donut({
                    element : element,
                    data : [{
                        value : 30,
                        label : 'Innovation',
                    }, {
                        value : 35,
                        label : 'Client Care'
                    }, {
                        value : 25,
                        label : 'Operational Excelence'
                    }, {
                        value : 5,
                        label : 'Integrity'
                    }, {
                        value : 5,
                        label : 'Deliver the difference'
                    }],
                    colors: [
                        '#900323',
                        '#39B580',
                        '#064145',
                        '#808080',
                        '#95A7BB'
                      ],
                    formatter : function(x) {
                        return x + "%"
                    }
                });

            }
        }
    })



});
