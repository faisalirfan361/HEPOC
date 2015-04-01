define(['setup/module', 'lodash'], function (module, _) {

    'use strict';

    module.registerController('SetupCtrl', function ($scope, $interval, CalendarEvent) {

        // Live Feeds Widget Data And Display Controls
        // Live Stats Tab

        function getFakeItem(index, prevValue){
            var limitUp = Math.min(100, prevValue + 5),
                limitDown = Math.abs(prevValue - 5);
            return [
                index,
                _.random(limitDown, limitUp, true)
            ]
        }

        function getFakeData() {
            return _(_.range(199)).reduce(function (out, number) {

                out.push(getFakeItem(number+1, _.last(out)[1]));
                return out;
            }, [
                [0, 50] // starting point
            ])
        }

        //this is a recogniation page model 
        $scope.programNameText = '';
        $scope.programNameSelect = '';

        // this is a dummy program list for select box at recognition page
        $scope.programItems = [
           {ID: '000001', Title: 'Choose Program'},
           {ID: '000002', Title: 'Awesomeness'},
           {ID: '000003', Title: 'Appriciate Great Work'},
           {ID: '000002', Title: 'Awesomeness'},
           {ID: '000002', Title: 'Wellness'},
           {ID: '000002', Title: 'Proffesionalism'},
           {ID: '000002', Title: 'Career Achievement'},
           {ID: '000002', Title: 'Special Thanks'},
           {ID: '000002', Title: 'Celebrate Milestones'},
           {ID: '000002', Title: 'Appriciate Efforts'},
           {ID: '000002', Title: 'Celebrate Excellence'}
        ];
        $scope.activityBage = true;
        $scope.activityThanks = true;
        $scope.activityNomination = true;
        $scope.programDescription = '';

        // this is a dummy programs , which is currently shown in table at recogniation page 
        $scope.programs = [           
           {ID: '1', Name: 'Awesomeness', Description: 'This is a dummy text to show description size.'},
           {ID: '2', Name: 'Appriciate Great Work', Description: 'This is a dummy text to show description size.'},
           {ID: '3', Name: 'Awesomeness', Description: 'This is a dummy text to show description size.'},
           {ID: '4', Name: 'Wellness', Description: 'This is a dummy text to show description size.'},
           {ID: '5', Name: 'Proffesionalism', Description: 'This is a dummy text to show description size.'}
        ];

        // it will be called from add program button, it consider model is already populated.
        $scope.addProgram = function() {
            var dump = ' programNameText: ' + $scope.programNameText;
            dump += ', programNameSelect: '+$scope.programNameSelect;
            dump += ', activityBage: '+$scope.activityBage;
            dump += ', activityThanks: '+$scope.activityBage;
            dump += ', activityNomination: '+$scope.activityBage;
            dump += ', programDescription: '+$scope.programDescription;
            console.log(dump);

            // it checks if user enter names is empty then go for selected
            if ($scope.programNameText === '')
                angular.forEach($scope.programItems, function(value, key) {
                    if (value.ID === $scope.programNameSelect)
                        $scope.programNameText = value.Title;
                });
            //it checks if user have even not select nor enter name
            if ($scope.programNameText.trim() !== '') {
                var newItem = {ID: $scope.programs.length+1, Name: $scope.programNameText, Description: $scope.programDescription};

                //new item will be directly push to programs array, as angular will update it on view
                $scope.programs.push(newItem);
            }
        };

        $scope.autoUpdate = false;

        var updateInterval;
        $scope.$watch('autoUpdate', function(autoUpdate){

            if(autoUpdate){
                updateInterval = $interval(function(){
                    var stats = _.rest($scope.liveStats[0]).map(function(elem, i){
                        elem[0] = i;
                        return elem;
                    });
                    stats.push([199, _.last(stats)[1]]);
                    $scope.liveStats = [stats];
                }, 1500)
            } else {
                $interval.cancel(updateInterval);
            }
        });


        $scope.liveStats = [getFakeData()];



        $scope.liveStatsOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false

                }
            }
        };


        // Stats Display With Flot Chart

        var twitter = [
            [1, 27],
            [2, 34],
            [3, 51],
            [4, 48],
            [5, 55],
            [6, 65],
            [7, 61],
            [8, 70],
            [9, 65],
            [10, 75],
            [11, 57],
            [12, 59],
            [13, 62]
        ];
        var facebook = [
            [1, 25],
            [2, 31],
            [3, 45],
            [4, 37],
            [5, 38],
            [6, 40],
            [7, 47],
            [8, 55],
            [9, 43],
            [10, 50],
            [11, 47],
            [12, 39],
            [13, 47]
        ];
        $scope.statsData = [
            {
                label: "Twitter",
                data: twitter,
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            },
            {
                label: "Facebook",
                data: facebook,
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];

        $scope.statsDisplayOptions = {
            grid: {
                hoverable: true
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                //content : "Value <b>$x</b> Value <span>$y</span>",
                defaultTheme: false
            },
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEB"],
                    [3, "MAR"],
                    [4, "APR"],
                    [5, "MAY"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AUG"],
                    [9, "SEP"],
                    [10, "OCT"],
                    [11, "NOV"],
                    [12, "DEC"],
                    [13, "JAN+1"]
                ]
            },
            yaxes: {

            }
        };


        /* Live stats TAB 3: Revenew  */

        var trgt = [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
            prft = [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
            sgnups = [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]];

        var targets = {
            label : "Target Profit",
            data : trgt,
            bars : {
                show : true,
                align : "center",
                barWidth : 30 * 30 * 60 * 1000 * 80
            }
        };
        $scope.targetsShow = true;

        $scope.$watch('targetsShow', function(toggle){
            reveniewElementToggle(targets, toggle);
        });


        var actuals = {
            label : "Actual Profit",
            data : prft,
            color : '#3276B1',
            lines : {
                show : true,
                lineWidth : 3
            },
            points : {
                show : true
            }
        };

        $scope.actualsShow = true;

        $scope.$watch('actualsShow', function(toggle){
            reveniewElementToggle(actuals, toggle);
        });

        var signups = {
            label : "Actual Signups",
            data : sgnups,
            color : '#71843F',
            lines : {
                show : true,
                lineWidth : 1
            },
            points : {
                show : true
            }
        };
        $scope.signupsShow = true;

        $scope.$watch('signupsShow', function(toggle){
            reveniewElementToggle(signups, toggle);
        });

        $scope.revenewData = [targets, actuals, signups];

        function reveniewElementToggle(element, toggle){
            if(toggle){
                if($scope.revenewData.indexOf(element) == -1)
                    $scope.revenewData.push(element)
            } else {
                $scope.revenewData = _.without($scope.revenewData, element);
            }
        }

        $scope.revenewDisplayOptions = {
            grid : {
                hoverable : true
            },
            tooltip : true,
            tooltipOpts : {
                //content: '%x - %y',
                //dateFormat: '%b %y',
                defaultTheme : false
            },
            xaxis : {
                mode : "time"
            },
            yaxes : {
                tickFormatter : function(val, axis) {
                    return "$" + val;
                },
                max : 1200
            }

        };

        // bird eye widget data
        $scope.countriesVisitsData = {
            "US": 4977,
            "AU": 4873,
            "IN": 3671,
            "BR": 2476,
            "TR": 1476,
            "CN": 146,
            "CA": 134,
            "BD": 100
        };

        $scope.events = [];

        // Queriing our events from CalendarEvent resource...
        // Scope update will automatically update the calendar
        CalendarEvent.query().$promise.then(function (events) {
            $scope.events = events;
        });


    });

});
