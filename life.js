var chartDom = document.getElementById('life');
var myChart = echarts.init(chartDom);
var option;
const list = [
  { id: 1, name: 'Root 1', parentId: null },
  { id: 2, name: 'Child 1-1', parentId: 1 },
  { id: 3, name: 'Child 1-2', parentId: 1 },
  { id: 4, name: 'Root 2', parentId: null },
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
