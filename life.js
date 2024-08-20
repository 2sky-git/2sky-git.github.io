var chartDom = document.getElementById('life');
var myChart = echarts.init(chartDom);
var option;

var data = [
  {
    name: 'life',
    /* 过好这一生：活得长、活得好；自由 */
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
      },
      {
        name: '构建认知世界的思维框架',
        value: 10,
        children: [
          {
            name: '大量读书',
            value: 4,
            children: [
              {
                name: '怎么读？',
                value: 1
              },
              {
                name: '读什么？',
                value: 1
              },
              {
                name: '正在读',
                value: 1
              },
              {
                name: '读了什么',
                value: 1
              }
            ]
          },
           {
            name: '构建思维框架',
            value: 3,
            children: [
              {
                name: '毛泽东思想？',
                value: 1
              },
              {
                name: '悉达多？',
                value: 1
              }
            ]
          },
           {
            name: '改变世界',
            value: 3,
            children: [
              {
                name: '做自我',
                value: 1
              },
              {
                name: '实现自我',
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
