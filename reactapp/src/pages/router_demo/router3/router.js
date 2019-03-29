import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Main from './main'
import About from '../router1/about'
import Info from './info'
import Topic from '../router1/topic'
import Home from './Home'
import NotFound from './NotMatch'
export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            {/* 重定向 */}
            <Route path="/" exact render={() => <Redirect to="/main" />} />
            <Route
              path="/main"
              // exact={true}
              render={() => (
                <Main>
                  <Route path="/main/:mainId" component={Info} />
                  {/* 动态参数 */}
                </Main>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topic} />
            <Route path="/topics" component={Topic} />
            <Route component={NotFound} />
          </Switch>
        </Home>
      </Router>
    )
  }
}
