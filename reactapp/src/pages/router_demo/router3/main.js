import React from 'react'
import { Link } from 'react-router-dom'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        this is main component
        <Link to="/main/test-id">嵌套路由1</Link>
        <br />
        <Link to="/main/123">嵌套路由2</Link>
        <br />
        <Link to="/main/456">嵌套路由3</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
