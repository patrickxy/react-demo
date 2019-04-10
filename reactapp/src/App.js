import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    console.log('constructor')
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
        {this.props.children}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    )
  }
}
// dangerouslySetHTML 和 style 属性
/**
 * 覆盖默认样式
 */
// dangerouslySetHTML

// class Editor extends Component {
//   constructor() {
//     super()
//     this.state = {
//       content: '<h1>React.js 小书</h1>'
//     }
//   }

//   render () {
//     return (
//       <div className='editor-wrapper'  dangerouslySetInnerHTML={{__html:this.state.content}}>
//       </div>
//     )
//   }
// }

// style
//<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>

// const getDefaultStyledPost = (defaultStyle) => {
//   return (
//     class Post extends React.Component {
//       render() {
//         const style = {...defaultStyle, ...this.props.style}
//         return (
//           <p style={style}>dwdwd</p>
//         )
//       }
//     }
//   )
// }

/**
 * 黑色边框的容器组件
 */
// class BlackBorderContainer extends Component {
//   render(){
//     return (<div>
//       {this.props.children.map((child,i)=>{
//         return (
//         <div className='border'>{child}</div>
//         )
//       })
//     }</div>)
//   }
// }

/**
 *  获取文本高度demo
 *  */
// class App extends Component {
//     constructor(){
//     super();
//     console.log('constructor');
//     this.state = {
//       content:'patrick'
//     }
//   }
//   handleConsole(){
//     console.log(this.p.clientHeight);//21
//   }
//   componentWillMount(){
//     console.log('will mount');
//   }
//   componentDidMount(){
//     console.log('did mount');
//   }
//   componentWillUnmount(){
//     console.log('will un mount');
//   }
//   render() {
//     return (
//       <div className="App">
//         <p ref={(p) => this.p = p} onClick={this.handleConsole.bind(this)}>{this.state.content}</p>
//       </div>
//     );
//   }
// }

/**
 * 异步加载数据demo
 */
// class App extends Component {
//     constructor(){
//     super();
//     this.state = {
//       content:""
//     }
//     console.log('constructor');
//   }
//   refresh(){
//     this.setState({content:'数据加载中...'})
//     setTimeout(()=>{
//       this.setState({content:'patrick'})
//     },100)
//   }
//   componentWillMount(){
//     console.log('will mount');
//   }
//   componentDidMount(){
//     console.log('did mount');
//   }
//   componentWillUnmount(){
//     console.log('will un mount');
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className='post-content'>{this.state.content}</div>
//           <button onClick={this.refresh.bind(this)}>刷新</button>
//       </div>
//     );
//   }
// }

//做一个百分比换算器，需要你完成三个组件：Input：封装了原生的input，可以输入任意数字
//PercentageShower：实时 显示 Input 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。
//PercentageApp：组合上述两个组件。

// class Input extends Component {
//   constructor(){
//     super();
//     this.state = {
//       percent:'',
//     }
//   }
//   handlePercentChange(e){
//     console.log(e.target.value);
//     this.setState({percent:e.target.value},()=>{
//       const percent = this.state.percent;
//       this.props.onSubmit(percent);
//     });
//   }
//   render () {
//     return (
//       <div>
//         <input onChange={this.handlePercentChange.bind(this)} type='number' max="1" />
//       </div>
//     )
//   }
// }

// class PercentageShower extends Component {
//   render () {
//     const {percent} = this.props;
//     return (
//       <div>{percent}</div>
//     )
//   }
// }

// class PercentageApp extends Component {
//   constructor(){
//     super();
//     this.state = {
//       realPercent:''
//     }
//   }
//   handleSubmitPercent(val){
//     this.setState({realPercent:(val*100).toFixed(2)+'%'})
//   }
//   render () {
//     return (
//       <div>
//         <Input onSubmit={this.handleSubmitPercent.bind(this)}></Input>
//         <PercentageShower percent={this.state.realPercent}></PercentageShower>
//       </div>
//     )
//   }
// }

//循环生成列表
// class Lesson extends Component {
//   render(){
//     const { lesson } = this.props
//     return(

//     <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
//     <h1>{lesson.title}</h1>
//     <p>{lesson.description}</p></div>
//     )
//   }
// }

// class Test extends Component {
//   render(){
//     const lessons = [
//       { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//       { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//       { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//       { title: 'Lesson 4: title', description: 'Lesson 4: description' }
//     ]
//   return (
//     <div>
//     {lessons.map((lesson,i)=>{
//      return   <Lesson key={i} index={i} lesson={lesson}/>
//     })}
//     </div>
//     )
//   }
// }

// 题目1
// render () {
//     const N = getNotificationsCount();
//     return (
//       <div>
//           {N>0?<span>有({N})条未读消息</span>:<span>没有未读消息</span>}
//       </div>
//     )
//   }

// 题目2
// const title = <h1 className = "title">ScriptOJ</h1>
// const page = <div className="content">{title}</div>

//题目3
// bark () {
//     console.log('bark');
//     this.run();
//   }

//   run () {
//     console.log('run')
//   }

//   render () {
//     return (<div onClick={this.bark.bind(this)}>DOG</div>)
//   }

// 绑定this 并传递参数

// handleClickOnTitle (word) {
//   console.log(this, word)
// }

// render () {
//   return (
//     <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
//   )
// }

// 题目4
// this.state ={
//   isRunning:false,
//   isBarking:false
// }
// }
// bark () {
// this.setState((prev)=>{
//   return {
//     isRunning:true,
//     isBarking: true
// }
// })
// this.run();
// }
// run () {
// setTimeout(()=>{
//   this.setState((prev)=>{
//   return {
//     isRunning:false,
//     isBarking: false
// }
// })
// },20)
// }
// render () {
// return (<div onClick={this.bark.bind(this)}>DOG</div>)
// }

// 题目5 显示章节以及标题 props的用法 map的用法

// class Lesson extends Component {
//   render(){
//     const { lesson } = this.props
//     return(

//     <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
//     <h1>{lesson.title}</h1>
//     <p>{lesson.description}</p></div>
//     )
//   }
// }

// class Test extends Component {
//   render(){
//     const lessons = [
//       { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//       { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//       { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//       { title: 'Lesson 4: title', description: 'Lesson 4: description' }
//     ]
//   return (
//     <div>
//     {lessons.map((lesson,i)=>{
//      return   <Lesson key={i} index={i} lesson={lesson}/>
//     })}
//     </div>
//     )
//   }
// }

export default App
