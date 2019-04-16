/**
 * @author patrick
 * @created 2019/04/10 15:19:30
 */
import React from 'react'
import { Card, Button, Radio } from 'antd'
export default class Buttons extends React.Component {
  state = {
    loading: false,
    size: 'default'
  }
  enterLoading = () => {
    this.setState({ loading: true })
  }
  cancelLoading = () => {
    this.setState({ loading: false })
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" loading={true}>
            创建
          </Button>
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Click me!
          </Button>
          <Button type="danger" onClick={this.cancelLoading}>
            Cancel
          </Button>
          <Button.Group>
            <Button
              type="danger"
              size={this.state.size}
              onClick={this.cancelLoading}
            >
              Cancel
            </Button>
            <Button
              type="danger"
              size={this.state.size}
              onClick={this.cancelLoading}
            >
              Cancel
            </Button>
          </Button.Group>
          <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
            <Radio value="small" />
            <Radio value="default" />
            <Radio value="large" />
          </Radio.Group>
        </Card>
      </div>
    )
  }
}
