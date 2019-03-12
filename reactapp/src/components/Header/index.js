import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../util/util'
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      username: 'patrick'
    })
    setInterval(() => {
      let sysTime = Util.formatDate(new Date().getTime())
      this.setState({ sysTime })
    }, 1000)
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎,{this.state.username}</span>
            <a className="logout">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            <span>首页</span>
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
