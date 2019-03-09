// antd 主页面程序
import React from 'react'
import { Row, Col } from 'antd'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import NavLeft from './pages/components/NavLeft'
export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={3}>
            <NavLeft />
          </Col>
          <Col span={21}>
            <Header />
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}
