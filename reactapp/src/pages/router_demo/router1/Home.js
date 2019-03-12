import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Main from './main.js'
import About from './about.js'
import Topic from './topic.js'
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" component={Main} />
        {/* <div>
          <Route path="/about" />
          <Route path="/topic" />
        </div> */}
      </HashRouter>
    )
  }
}
