var chartDom = document.getElementById('life');
var myChart = echarts.init(chartDom);
var option;
const list = [
  { id: 1, name: 'life', parentId: null },
  { id: 2, name: '安详&和谐的内在', parentId: 1},
  { id: 21, name: '冥想&内观', parentId: 2},
  { id: 22, name: '十日禅', parentId: 2},
  { id: 23, name: '领会般若智', parentId: 2},
  { id: 3, name: '认知世界的思维框架', parentId: 1 },
  { id: 31, name: '大量读书', parentId: 3 },
  { id: 311, name: '怎么读？', parentId: 31 },
  { id: 312, name: '读什么？', parentId: 31 },
  { id: 313, name: '正在读', parentId: 31 },
  { id: 314, name: '已读', parentId: 31 },
  { id: 32, name: '构建思维框架', parentId: 3 },
  { id: 321, name: '毛泽东思想？', parentId: 32 },
  { id: 322, name: '悉达多？', parentId: 32 },
  { id: 33, name: '改变世界', parentId: 3 },
  { id: 4, name: 'Root 2', parentId: 1 }
];

function buildTree(list) {
  const nodeMap = {}; 
  const tree = [];

  list.forEach(node => {
    nodeMap[node.id] = { ...node, children: [] }; 
  });

  // 构建树和计算子节点个数
  list.forEach(node => {
    if (node.parentId) {
      nodeMap[node.parentId].children.push(nodeMap[node.id]);
    } else {
      tree.push(nodeMap[node.id]);
    }
  });

  function countChildren(node) {
    if (node.children.length==0) {
      node.value = 1;
    } else {
      node.value = node.children.length+node.value;
    }
    node.children.forEach(countChildren);
  }

  tree.forEach(countChildren);
  return tree;
}

var data = buildTree(list);

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
