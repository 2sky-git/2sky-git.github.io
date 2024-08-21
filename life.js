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
      { id: 322, name: '多元思维', parentId: 32 },
        { id: 3221, name: '利益思维', parentId: 322 },
    { id: 33, name: '改变世界', parentId: 3 },
  
  { id: 4, name: '财富自由', parentId: 1 },
    { id: 41, name: '理解经济运行', parentId: 4 },
      { id: 411, name: '置身事内', parentId: 41 },
      { id: 412, name: 'kkndme', parentId: 41 },
    { id: 42, name: '家庭理财', parentId: 4 },
    { id: 43, name: '构建闭环的赚钱系统', parentId: 4 },

  { id: 5, name: '健康长寿', parentId: 1 },
    { id: 51, name: '流水不腐', parentId: 5 },
    { id: 52, name: '充足的睡眠', parentId: 5 },
    { id: 53, name: '健康的饮食', parentId: 5 },
    { id: 54, name: '体检', parentId: 5 },

  { id: 6, name: '仁：普度众生', parentId: 1 },
    { id: 61, name: '妻子', parentId: 6 },
    { id: 62, name: '弟弟', parentId: 6 },
    { id: 63, name: '父母', parentId: 6 },
    { id: 64, name: '朋友', parentId: 6 },
    { id: 65, name: '众生', parentId: 6 },

  { id: 7, name: '自我实现', parentId: 1 },
    { id: 71, name: '脑机接口', parentId: 7 },
    { id: 72, name: '贡献精神世界的价值', parentId: 7 },
    { id: 73, name: '自由的世界公民', parentId: 7 },
      { id: 731, name: '环球旅行', parentId: 73 },
      { id: 731, name: 'run？', parentId: 73 },
    { id: 74, name: '人生只有一次，要达到什么成就？', parentId: 7 },

  { id: 8, name: '舒适的环境', parentId: 1 },
    { id: 81, name: '拥抱自然', parentId: 8 },
    { id: 82, name: '个人读书角', parentId: 8 }
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
