var chartDom = document.getElementById('life');
var myChart = echarts.init(chartDom);
var option;
const list = [
  { id: 0, name: 'life', parentId: null },
  { id: 1, name: '安详&和谐的内在', parentId: 0},
  { id: 11, name: '冥想&内观', parentId: 1},
  { id: 12, name: '十日禅', parentId: 1},
  { id: 13, name: '领会般若智', parentId: 1},
  { id: 2, name: '认知世界的思维框架', parentId: 0 },
  { id: 21, name: '大量读书', parentId: 2 },
  { id: 211, name: '怎么读？', parentId: 21 },
  { id: 212, name: '读什么？', parentId: 21 },
  { id: 213, name: '正在读', parentId: 21 },
  { id: 214, name: '已读', parentId: 21 },
  { id: 22, name: '构建思维框架', parentId: 2 },
  { id: 221, name: '毛泽东思想？', parentId: 22 },
  { id: 222, name: '悉达多？', parentId: 22 },
  { id: 23, name: '改变世界', parentId: 2 },
  { id: 3, name: 'Root 2', parentId: 0 }
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
    node.value = node.children.length+1;
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
