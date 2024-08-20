var chartDom = document.getElementById('life');
var myChart = echarts.init(chartDom);
var option;

var data = [
  {
    name: 'life',
    // 过好这一生：活得长、活得好；自由
    children: [
      {
        name: '纯净&安详的生命状态',
        value: 10,
        children: [
          {
            name: '内观',
            value: 3,
            children: [
              {
                name: '冥想练习',
                value: 1
              },
              {
                name: '十日禅',
                value: 1
              },
              {
                name: '般若智',
                value: 1
              }
            ]
          }
        ]
      }
    ]
  }
];
option = {
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 10,
    inRange: {
      color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
    }
  },
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '90%'],
    label: {
      rotate: 'radial'
    }
  }
};

option && myChart.setOption(option);
