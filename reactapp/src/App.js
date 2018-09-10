import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

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


export default App;
