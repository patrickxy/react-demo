import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from '../router1/main'
import About from '../router1/about'
import Topic from '../router1/topic'
import Home from './Home'
export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          {/* <Route path="/" component={Main} exact /> */}
          <Route
            path="/"
            // exact={true}
            render={() => (
              <Main>
                <Route path="/a" component={About} />
              </Main>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topic} />
        </Home>
      </Router>
    )
  }
}
