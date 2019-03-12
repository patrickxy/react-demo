import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
// Link
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>this is main component</div>
        {/* <div>
          <Route path="/about" />
          <Route path="/topic" />
        </div> */}
      </HashRouter>
    )
  }
}
