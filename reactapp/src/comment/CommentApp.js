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
    })
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments = {this.state.commentList} />
      </div>
    )
  }
}

export default CommentApp

// 功能点自动聚焦到评论框
    // CommentApp  1.ref={(textarea)=>this.textarea = textarea}
    // CommentApp  2.componentDidMount(){this.textarea.focus();}
// 持久化用户名  在姓名输入框失去焦点的时候 存储username 到localstoarge中 加载的时候获取并显示