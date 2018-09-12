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