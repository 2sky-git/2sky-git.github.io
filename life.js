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
    { id: 31, name: '研究问题', parentId: 3 },
      { id: 311, name: '怎么研究？', parentId: 31 },
        { id: 3111, name: '确定问题', parentId: 311 },
        { id: 3112, name: '收集资料', parentId: 311 },
          { id: 31121, name: '经典书单', parentId: 3112 },
          { id: 31122, name: '英文世界的知识', parentId: 3112 },
        { id: 3113, name: '提炼观点', parentId: 311 },
        { id: 3114, name: '批判性继承，深刻认知问题', parentId: 311 },
      { id: 312, name: '研究什么问题？', parentId: 31 },
        { id: 3121, name: '人生哲学观', parentId: 312 },
        { id: 3122, name: '深刻理解社会本质', parentId: 312 },
        { id: 3123, name: 'AI', parentId: 312 },
        { id: 3124, name: '脑机接口', parentId: 312 },
        { id: 3125, name: '经济运行规律与财富自由', parentId: 312 },
    { id: 32, name: '构建思维框架', parentId: 3 },
      { id: 321, name: '毛泽东思想？', parentId: 32 },
      { id: 322, name: '多元思维', parentId: 32 },
        { id: 3221, name: '人性的利益驱动思维决策链', parentId: 322 },
        { id: 3222, name: '精英掌控话语权，底层被剥削', parentId: 322 },
        { id: 3223, name: '丛林法则', parentId: 322 },
        { id: 3224, name: '人性的趋利避害', parentId: 322 },
        { id: 3225, name: '5W1H黄金圈法则的认识论', parentId: 322 },
        { id: 3226, name: '研究问题的认识论', parentId: 322 },
    { id: 34, name: '英语能力', parentId: 3 },
    { id: 33, name: '自我实现，改变世界', parentId: 3 },

  { id: 7, name: '自我实现', parentId: 1 },
    { id: 71, name: '脑机接口', parentId: 7 },
    { id: 72, name: '创造精神思想价值', parentId: 7 },
    { id: 73, name: '自由的世界公民', parentId: 7 },
      { id: 731, name: '环球旅行', parentId: 73 },
      { id: 732, name: 'run？', parentId: 73 },
    { id: 74, name: '人生成就', parentId: 7 },
      { id: 741, name: '成为社会精英', parentId: 74 },

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
      fontSize: 8,
      rotate: 'radial'
    }
  }
};

option && myChart.setOption(option);
