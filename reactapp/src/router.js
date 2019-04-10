import React from 'react'
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
export default class Irouter extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* 根组件 */}
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Login} />
          <Route path="/orderDetail" component={Login} />
          {/* 只用/ 不能使用exact 或者 不能使用子路由 */}
        </App>
      </HashRouter>
    )
  }
}
