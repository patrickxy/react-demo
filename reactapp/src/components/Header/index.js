import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      username: 'patrick'
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎,{this.state.username}</span>
            <span className="logout">退出</span>
            <a className="logout">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="20" className="breadcrumb-title">
            <span>欢迎,{this.state.username}</span>
          </Col>
          <Col span="4" className="weather">
            <span className="date">2019-3-11</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
