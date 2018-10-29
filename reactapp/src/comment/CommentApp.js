import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
      commentList : []
    }
  }
  handleSubmitComment(comment){
    if(!comment) return;
    if(!comment.username) return alert('请输入用户名');
    if(!comment.content) return alert('请输入评论内容');
    this.state.commentList.push(comment)
    this.setState({
      commentList: this.state.commentList
    },()=>{
      this._saveComments();
    })
  }
  _saveComments(){
    window.localStorage.setItem('comments',JSON.stringify(this.state.commentList))
  }
  _loadComments(){
    let comments = JSON.parse(window.localStorage.getItem('comments'));
    if(comments){
      this.setState({commentList:comments})
    }
  }
  testFunc(url){
    console.log(url);
    return (url1)=>{
      console.log(url1);
    }
    // const loadAndFresh = (url)=>{
    //     console.log(url);
    //   (url1)=>{
    //     console.log(url1);
    //   }
    // }
  }
  handleDeleteComment (index) {
    const comments = this.state.commentList;
    console.log(comments);
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  componentWillMount(){
    this._loadComments();
    this.testFunc('111')('222');
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments = {this.state.commentList} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}

export default CommentApp

// 功能点自动聚焦到评论框
    // CommentApp  1.ref={(textarea)=>this.textarea = textarea}
    // CommentApp  2.componentDidMount(){this.textarea.focus();}
// 持久化用户名  在姓名输入框失去焦点的时候 存储username 到localstoarge中 加载的时候获取并显示
    //onBlur={this.handleUsernameBlur.bind(this)}
    //handleUsernameBlur(e){this._saveUsername(e.target.value);}
    //_saveUsername(name){window.localStorage.setItem('username',name);}
    //_loadUsername(){if(window.localStorage.getItem('username')){this.setState({username:window.localStorage.getItem('username')});}}
    //componentWillMount(){this._loadUsername();}
//持久化评论 与持久化用户名类似
// 删除评论  （清除定时器）
  // componentWillMount(){
  //   this._timer = setInterval(()=>{
  //       this._updateTime();
  //   },5000)
  //   this._updateTime();
  // }
// 显示评论发布时间
  // commment this.state = {countTime:''}
  // commment this._updateTime();
  //处理评论 <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}} />
  //把 `` 包含的内容用 <code> 包裹起来   content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  //把 `` 包含的内容用 <code> 包裹起来 防止xxs攻击
  // content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`([\S\s]+?)`/g, '<code>$1</code>')

// 高阶组件  高阶组件是一个函数，传入一个组件返回一个新的组件