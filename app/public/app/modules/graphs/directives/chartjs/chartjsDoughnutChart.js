define(['modules/graphs/module', 'chartjs'], function (module) {

    'use strict';

    return module.registerDirective('chartjsDoughnutChart', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var doughnutOptions = {
                    //Boolean - Whether we should show a stroke on each segment
                    segmentShowStroke : false,
                    //String - The colour of each segment stroke
                    segmentStrokeColor : "#064145",
                    //Number - The width of each segment stroke
                    segmentStrokeWidth : 1,
                    //Number - The percentage of the chart that we cut out of the middle
                    percentageInnerCutout : 40, // This is 0 for Pie charts
                    //Number - Amount of animation steps
                    animationSteps : 100,
                    //String - Animation easing effect
                    animationEasing : "easeOutBounce",
                    //Boolean - Whether we animate the rotation of the Doughnut
                    animateRotate : true,
                    //Boolean - Whether we animate scaling the Doughnut from the centre
                    animateScale : false,
                    //Boolean - Re-draw chart on page resize
                    responsive: true,
                    //String - A legend template
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
                };

                var doughnutData = [
                    {
                        value: 150,
                        color:"rgba(91,144,191,1)",
                        highlight: "rgba(91,144,191,0.7)",
                        label: "Innovation"
                    },

                    {
                        value: 50,
                        color: "rgba(150,181,180,0.7)",
                        highlight: "rgba(150,181,180,0.9)",
                        label: "Client Care"
                    },
                    {
                        value: 100,
                        color:"rgba(163,190,140,1)",
                        highlight: "rgba(163,190,140,0.7)",
                        label: "Operational Excelence"
                    },
                    {
                        value: 100,
                        color: "rgba(171,121,103, 1)",
                        highlight: "rgba(171, 121, 103, 0.7)",
                        label: "Integrity"
                    },
                    {
                        value: 100,
                        color: "rgba(208,135,112, 1)",
                        highlight: "rgba(208,135,112, 0.7)",
                        label: "Deliver the difference"
                    }
                ];

                // render chart
                var ctx = element[0].getContext("2d");
                new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
            }}
    });
});
