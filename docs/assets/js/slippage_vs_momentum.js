const slippages = [-5.8, -4.5, -2.15, 2.15, 4.23];
data = slippages.map(v => {
    const position = v >= 0 ? 'top' : 'bottom';
    const color = v >= 0 ? 'green' : 'red';
    return {
        value: v,
        label: {show: true, position},
        itemStyle: {color, borderRadius: 5},
    };
});

option = {
    backgroundColor: 'white',
    title: {
        text: 'Slippage vs Period Momentum',
        left: 'center',
    },
    tooltip: {
        show: false,
    },
    grid: {
        top: 80,
        bottom: 30,
        containLabel: true,
    },
    yAxis: {
        type: 'value',
        axisLine: {show: true},
        axisTick: {show: true},
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        name: 'Slippage (bps)',
    },
    xAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: false, align: 'center', inside: true},
        axisTick: {show: false},
        splitLine: {show: false},
        offset: 0,
        data: [
            'Strongly\nTowards', 
            'Towards', 
            'Neutral', 
            'Away', 
            'Strongly\nAway'
        ],
    },
    series: [
        {
            name: 'Slippage',
            type: 'bar',
            data,
            markLine: {
                label: {
                    show: true, 
                    formatter: 'Average\n  {c}',
                    borderColor: 'grey',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 5,
                },
                data: [
                    {type: 'average', name: 'Average'}
                ]
            }
        }, {
            name: 'Period Momentum',
            type: 'scatter',
            symbolSize: 0,
            label: {
                show: true,
                formatter: function(p1, p2) {
                    console.log(p1);
                    return p1.name;
                },
            },
            data: [0.7, 0.5, 0.5, -0.5, -0.7],
        }
    ]
};

dom = document.getElementById("slippage_vs_momentum");
chart = echarts.init(dom);
chart.setOption(option);
