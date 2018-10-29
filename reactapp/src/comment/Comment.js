import React, { Component } from 'react'
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            countTime:''
        }
    }
    componentWillMount(){
        this._timer = setInterval(()=>{
            this._updateTime();
        },5000)
        this._updateTime();
    }
    _updateTime(){
        let time = new Date().getTime()-this.props.comment.createTime;
        let timeStr = '';
        let backTime = Math.round(time/1000);
        if(backTime<60){
            timeStr =  backTime+'秒'
        }else if(backTime<3600){
            timeStr =  Math.round(backTime/60)+'分钟'
        }else if(backTime<86400){
            timeStr = Math.round(backTime/3600)+'小时'
        }else{
            timeStr =  Math.round(backTime/86400)+'天'
        }
        this.setState({countTime:'发布于'+timeStr+'以前'});
    }
    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }
    componentWillUnmount () {
        clearInterval(this._timer)
      }
    // componentDidMount(){
    //     this.state.countTime = new Date().getTime()-new Date(this.props.createTime).getTime()
    // }
    render(){
        const {comment} = this.props;
        return(
            <div className="comment">
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                    <p>{comment.content}</p>
                    <span>{this.state.countTime}</span>
                    <span onClick={this.handleDeleteComment.bind(this)} className='comment-delete'>
                        删除
                    </span>
            </div>
        )
    }
}