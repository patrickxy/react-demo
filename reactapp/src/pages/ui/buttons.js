/**
 * @author patrick
 * @created 2019/04/10 15:19:30
 */
import React from 'react'
import { Card, Button } from 'antd'
export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Button type="primary">创建</Button>
        </Card>
      </div>
    )
  }
}
