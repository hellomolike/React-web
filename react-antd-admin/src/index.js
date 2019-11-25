/**
 * 程序的入口, 类似java中的main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './utils/index.js';  // 引入各种prototype辅助方法
import store from 'redux/store.js';  // redux store

// 开始引入各种自定义的组件
import App from './components/App';
import Welcome from './components/Welcome';
import Error from './components/Error';
// import Hello from './components/Hello';
// import WorkOverView from './components/WorkPackageEditing/WorkOverView';
// import WorkOrder from './components/WorkPackageEditing/WorkOrder';
// import Isolation from './components/WorkPackageEditing/Isolation/index.js';
import ReadyPackage from './components/WorkPackageEditing/ReadyPackage/index.js';
import Testtabeffect from './components/WorkPackageEditing/Test tab effect/index.js';
import Testpopupeffect from './components/WorkPackageEditing/Test popup effect/index.js';
import Relatedpersonnel from './components/WorkPackageEditing/Related personnel/index.js';


//import DBTable from './components/DBTable';

// 将DBTable组件做成动态路由, 减小bundle size
// 注意不要再import DBTable了, 不然就没意义了
// 一些比较大/不常用的组件, 都可以考虑做成动态路由
const DBTableContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/DBTable').default)
  }, 'DBTable');
};

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="index">
          <Route path="test" tableName="test" getComponent={DBTableContainer} />
        </Route>
        <Route path="GoingOnmv">
          <Route path="GoingOn3">
            <Route path="GoingOn3-1" component={ReadyPackage} />
            <Route path="GoingOn3-2" component={Testtabeffect} />
            <Route path="GoingOn3-3" component={Testpopupeffect} />
            <Route path="GoingOn3-4" component={Relatedpersonnel}/>
          </Route>
        </Route>

       

        <Route path="*" component={Error} />

      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
