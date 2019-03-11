import React from 'react'
import menuConfig from './../../antdConfig/menuConfig'
import './index.less'
import { Menu } from 'antd'
// import { Icon } from 'antd'
const SubMenu = Menu.SubMenu
export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({ menuTreeNode })
  }
  /**
   * 菜单渲染-递归
   */
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} title={item.title}>
          {item.title}
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>patrick ms</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}
