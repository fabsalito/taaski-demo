$(function () {
    // // Make monochrome colors and set them as default for all pies
    // Highcharts.getOptions().plotOptions.pie.colors = (function () {
    //     var colors = [],
    //         base = Highcharts.getOptions().colors[0],
    //         i;

    //     for (i = 0; i < 10; i += 1) {
    //         // Start out with a darkened base color (negative brighten), and end
    //         // up with a much brighter color
    //         colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    //     }
    //     return colors;
    // }());

    $('#container_charts').highcharts({
        credits: {
            enabled: false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 300
        },
        title: {
            text: 'Task completion'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Tasks",
            colorByPoint: true,
            data: [{
                name: "Completes",
                y: 74,
                color: '#446CB3'
            }, {
                name: "Pendings",
                y: 26,
                color: '#D91E18',
                sliced: true,
                selected: true
            }]
        }]
    });
});