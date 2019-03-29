import React from 'react'
// Link
export default class Info extends React.Component {
  componentDidMount() {
    console.log(this.props.match)
  }
  render() {
    return <div>这里是动态路由功能{this.props.match.params.mainId}</div>
    // 获取动态路由参数
  }
}
