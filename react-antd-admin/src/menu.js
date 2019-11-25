/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 其实理论上可以嵌套更多层菜单的, 但是我觉得超过3层就不好看了
// 可用的图标见这里: https://ant.design/components/icon-cn/

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'index',  // route时url中的值
    name: '我的工作台',  // 在菜单中显示的名称
    icon: 'play-circle',  // 图标是可选
    child: [
      {
        key: 'test',
        name: 'test',
      },
    ]
  },
  {
    key: 'devicmv',
    name: '设备管理',
    icon: 'clock-circle',
    child: [
      {
        key: 'option1',
        name: '系统信息维护',
      },
      {
        key: 'option2',
        name: '设备类型维护',
      },
      {
        key: 'option3',
        name: '系统分类维护',
      },
      {
        key: 'option4',
        name: '厂房信息维护',
      },
      {
        key: 'option5',
        name: '设备管辖处室维护',
      },
      {
        key: 'option6',
        name: '设备基础信息配置',
      },
      {
        key: 'option7',
        name: '设备信息维护',
      },
    ],
  },
  {
    key: 'plansmv',
    name: '计划管理',
    icon: 'clock-circle',
    child: [
      {
        key: 'plan1',
        name: '调试计划',
      },
      {
        key: 'plan2',
        name: '大修计划',
      },
      {
        key: 'plan3',
        name: '日常计划',
      },
    ],
  },
  {
    key: 'fixwm',
    name: '调试工作管理',
    icon: 'clock-circle',
    child:[
      {
        key:'fixwm1',
        name:'缺陷工作申请',
      },
      {
        key:'fixwm2',
        name:'保养工作申请',
      },
      {
        key:'fixwm3',
        name:'配合指令单',
      },
      {
        key:'fixwm4',
        name:'简易消缺工作申请单',
      },
      {
        key:'fixwm5',
        name:'调试工单',
      },
      {
        key:'fixwm6',
        name:'工单自自助服务',
      },
      {
        key:'fixwm7',
        name:'维修报告',
      },
    ],
  },
  {
    key: 'GoingOnmv',
    name: '运行工作管理',
    icon: 'clock-circle',
    child:[
      {
        key:'GoingOn1',
        name:'工作申请管理'
      },
      {
        key:'GoingOn2',
        name:'简单维修管理'
      },
      {
        key:'GoingOn3',
        name:'工作包管理',
        child:[
          {
            key:'GoingOn3-1',
            name :'工作包准备'
          },
          {
            key:'GoingOn3-2',
            name :'测试标签页'
          },
          {
            key:'GoingOn3-3',
            name :'测试弹窗'
          },
          {
            key:'GoingOn3-4',
            name :'统计员工信息'
          },
          {
            key:'GoingOn3-5',
            name :'wait...'
          },
          {
            key:'GoingOn3-6',
            name :'wait...'
          },
          {
            key:'GoingOn3-7',
            name :'wait...'
          },

        ],
      },
      {
        key:'GoingOn4',
        name:'工作计划管理'
      },
      {
        key:'GoingOn5',
        name:'开完工会签到管理'
      },
      {
        key:'GoingOn6',
        name:'工单信息管理'
      },
      {
        key:'GoingOn7',
        name:'工作实施管理'
      },
      {
        key:'GoingOn8',
        name:'开完工许可管理'
      },
      {
        key:'GoingOn9',
        name:'报告信息管理'
      },
      {
        key:'GoingOn10',
        name:'工作许可证管理'
      },
      {
        key:'GoingOn11',
        name:'预防性维修管理'
      },
    ],
  },
  {
    key: 'Isolationmv',
    name: '隔离管理',
    icon: 'clock-circle',
    child:[
      {
        key :'Isolation1',
        name :'隔离许可管理'
      }
    ],
  },
  {
    key: 'parameterConfig',
    name: '参数配置',
    icon: 'clock-circle',
    child:[
      {
        key :'parameterConfig1',
        name :'大修标识配置'
      },
      {
        key :'parameterConfig2',
        name :'许可证要求配置'
      },
      {
        key :'parameterConfig3',
        name :'先决条件配置'
      },
      {
        key :'parameterConfig4',
        name :'指令类型配置'
      },
      {
        key :'parameterConfig5',
        name :'工前会配置'
      },
      {
        key :'parameterConfig6',
        name :'共后会配置'
      },
      {
        key :'parameterConfig7',
        name :'风险分析单配置'
      },
      {
        key :'parameterConfig8',
        name :'试验专业配置'
      },
      {
        key :'parameterConfig9',
        name :'先决条件确认项配置'
      }

    ],
  },
  {
    key: 'daohang',
    name: '导航',
    icon: 'appstore',
    child: [
      {
        key: '555',
        name: '选项5',
      },
      {
        key: 'sanji',  // 最多只能到三级导航
        name: '三级导航',
        icon: 'laptop',
        child: [
          {
            key: '666',
            name: '选项6',
            icon: 'check',
          },
          {
            key: '777',
            name: '选项7',
            icon: 'close',
          },
          {
            key: '888',
            name: '选项8',
          },
          {
            key: '999',
            name: '选项9',
          },
        ],
      },
    ],
  },
  {
    key: 'test',
    name: '测试',
    icon: 'eye',
    child: [
      {
        key: 'aaa',
        name: '选项a',
      },
      {
        key: 'bbb',
        name: '选项b',
        icon: 'pause',
      },
      {
        key: 'ccc',
        name: '选项c',
      },
      {
        key: 'sanjiaaa',  // 最多只能到三级导航
        name: '三级导航aaa',
        child: [
          {
            key: '666aa',
            name: '选项6',
            icon: 'meh',
          },
        ],
      },
      {
        key: 'sanjibbb',  // 最多只能到三级导航
        name: '三级导航bbb',
        child: [
          {
            key: '666bb',
            name: '选项6',
          },
        ],
      },
    ],
  },
];

export default sidebarMenu;

// 定义header菜单, 格式和sidebar是一样的
// 特殊的地方在于, 我规定header的最右侧必须是用户相关操作的菜单, 所以定义了一个特殊的key
// 另外注意这个菜单定义的顺序是从右向左的, 因为样式是float:right
export const headerMenu = [
  {
    // 一个特殊的key, 定义用户菜单, 在这个submenu下面设置icon/name不会生效
    key: 'userMenu',
    child: [
      {
        key: 'modifyUser',
        name: '修改用户信息',
        icon: 'bulb',
        // 对于headerMenu的菜单项, 可以让它跳到外部地址, 如果设置了url属性, 就会打开一个新窗口
        // 如果不设置url属性, 行为和sidebarMenu是一样的, 激活特定的组件, 注意在index.js中配置好路由, 否则会404
        url: 'http://jxy.me',
      },
      {
        key: 'user222',
        name: '药药切克闹',
        icon: 'rocket',
      },
      {
        key: 'user333',
        name: '选项3',
        child: [
          {
            key: 'user333aaa',
            name: 'user333aaa',
            icon: 'windows',
          },
          {
            key: 'user333bbb',
            name: 'user333bbb',
            url: 'http://jxy.me',
          },
        ],
      },
    ],
  },
  {
    key: 'headerMenu2',
    name: 'header菜单',
    icon: 'team',
    child: [
      {
        key: 'headerMenu111',
        name: '菜单项1',
        icon: 'windows',
        url: 'http://jxy.me',
      },
      {
        key: '菜单项2',
        name: '短信表管理',
        url: 'http://jxy.me',
      },
      {
        key: '菜单项3',
        name: '选项3',
        icon: 'chrome',
        url: 'http://jxy.me',
      },
    ],
  },
  {
    key: 'headerMenu3',
    name: '我没有子菜单',
    icon: 'setting',
    url: 'http://jxy.me',
  },
  {
    key: 'headerMenu4',
    name: '我也没有子菜单',
    icon: 'shopping-cart',
  },
  {
    key: 'headerMenu5',
    name: '我没有图标',
    child: [
      {
        key: 'headerMenu5000000',
        name: '二级导航无子菜单',
      },
      {
        key: 'headerMenu51111',
        name: '三级导航',
        icon: 'laptop',
        child: [
          {
            key: 'headerMenu51111aa',
            name: '选项6',
            icon: 'meh',
          },
          {
            key: 'headerMenu51111bb',
            name: '选项7',
            icon: 'inbox',
          },
        ],
      },
      {
        key: 'headerMenu52222',
        name: '三级导航无图标',
        child: [
          {
            key: 'headerMenu52222aa',
            name: '选项8',
          },
          {
            key: 'headerMenu52222bb',
            name: '选项9',
          },
        ],
      },
    ],
  },
];
