const scale = 1;
const echartData = [
    { value: 18546, name: 'VWAP'}, 
    { value: 15157, name: 'Liquidity Seeking'}, 
    { value: 12543, name: 'POV'}, 
    { value: 9515, name: 'TWAP'}, 
    { value: 7154, name: 'Adaptive Close'}, 
];

const rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [14, 4],
        align: 'center',
    },
    total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center',
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14 * scale,
        padding: [44, 0, 10, 0],
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center',
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    },
};

option = {
    backgroundColor: '#031f2d',
    title: {
        text: 'Total Orders',
        left: 'center',
        top: '51%',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18 * scale,
            align: 'center',
        }
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            let total = 0;
            echartData.forEach(function(value) {
                total += value.value;
            });
            return '{total|' + total.toLocaleString() + '}';
        },
        data: [echartData[0].name],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich,
        },
    },
    series: [{
        name: 'Total Orders',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        label: {
            formatter: function(params, ticket, callback) {
                let total = 0; 
                echartData.forEach(function(value) {
                    total += value.value;
                });
                const fmtVal = params.value.toLocaleString();
                const percent = ((params.value / total) * 100).toFixed(1);
                return '{white|' + params.name + '}\n{hr|}\n{yellow|' + fmtVal + '}\n{blue|' + percent + '%}';
            },
            rich: rich,
        },
        labelLine: {
            length: 55 * scale,
            length2: 0,
            lineStyle: {
                color: '#0b5263'
            },
        },
        itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 1
        },
        data: echartData,
    }],
};

dom = document.getElementById("orders-by-strategy");
chart = echarts.init(dom);
chart.setOption(option);
