// antd 主页面程序
import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home/index'
import './pages/style/antd/common.less'
export default class Admin extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={3} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header />
            <Row className="content">
              <Home />
              {/* this.props.children */}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}
