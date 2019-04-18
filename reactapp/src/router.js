import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NotMatch from './pages/NotMatch'
import Home from './pages/home'
export default class Irouter extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* 根组件 */}
        <App>
          <Route path="/" exact render={() => <Redirect to="/admin/home" />} />
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home} />
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/loading" component={Buttons} />
                  <Route component={NotMatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route path="/orderDetail" component={Login} />
          {/* 只用/ 不能使用exact 或者 不能使用子路由 */}
        </App>
      </HashRouter>
    )
  }
}
