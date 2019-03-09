// import React, { Component } from 'react';
import React from 'react'
import { Button } from 'antd'
// import 'antd/dist/antd.css'
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  test = () => {
    this.setState({ count: this.state.count + 1 })
  }
  test1() {
    this.setState({ count: this.state.count + 1 })
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('did mount')
  }
  componentWillUnmount() {
    console.log('will un mount')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.count}</h1>
          <Button onClick={this.test}>test</Button>
          <Button onClick={this.test1.bind(this)}>test</Button>
        </header>
      </div>
    )
  }
}

export default Life
