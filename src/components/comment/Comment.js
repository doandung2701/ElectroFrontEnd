import React from 'react';
import { Comment, Tooltip, message} from 'antd';
import moment from 'moment';
import { Badge } from 'react-bootstrap';
import { isAdmin } from '../../helpers/helper';
import ReplyItem from './ReplyItem';

class CommentItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
          parentId: this.props.parent,
          cmtCnt: '',
          productId: this.props.productid,
          editCmtCnt: this.props.cmtCnt,
        }
    }

    handleInputChange = (e)=>{
      var name = e.target.name;
      var value = e.target.value;
      this.setState({
          [name]: value
      })
  }

    fillData = ()=>{
        if (this.props.replies&&this.props.replies.length>0){
          return this.props.replies.map((value,index)=>{
              return {
                actions: [<span onClick={()=>this.props.openrepbox(this.props.index)
                }><i className="fas fa-reply"></i>&nbsp;
                Reply to&nbsp;</span>,this.props.userId===value.user.userId&&
                <span onClick={()=>this.toggleEditRepBox(this.props.index,index)}>
                  <i className="fas fa-pencil-alt"></i>&nbsp;Edit</span>],
                author: <span>{value.user.username}&nbsp;
                 {isAdmin(value.user.roles)&&<Badge variant="primary">Admin</Badge>}</span> ,
                avatar: value.user.avatar,
                content: (
                  <div>
                    <p style={{color: 'black'}}>{value.cmtCnt}</p>
                  </div>
                ),
                datetime: (
                  <Tooltip title={moment(value.cmtDate).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(value.cmtDate).fromNow()}</span>
                  </Tooltip>
                ),
                repId: value.cmtId,
                cmtCnt: value.cmtCnt
              }
          })
        }
        return [];
      }

      toggleEditRepBox = (i1,i2)=>{
        var cmtItem = document.getElementsByClassName("cmt-item")[i1];
        var repBoxs = cmtItem.getElementsByClassName("edit-cmt-rep-box-cnt");
        repBoxs[i2].classList.toggle("active");
      }
      editComment = ()=>{
        if (this.state.editCmtCnt.length>0){
            this.props.editComment({
              cmtId: this.state.parentId,
              cmtCnt: this.state.editCmtCnt
            });
        }else{
            message.warning("The content must not be null!");
        }
    }

    postReply = ()=>{
      if (this.state.cmtCnt.length>0){
        this.props.postreply({
          parentId: this.state.parentId,
          cmtCnt: this.state.cmtCnt,
          productId: this.state.productId
        })
      this.setState({
        cmtCnt: ''
      })}
      else {
        message.info("The reply content must not be null",3);
      }
    }
  
    render(){
        return(
            <Comment className="cmt-item" actions={this.props.actions} 
            avatar={this.props.avatar} content={this.props.content}
            datetime={this.props.datetime} author={this.props.author}>
            {<div className="edit-cmt-box-cnt">
                    <textarea  className="edit-cmt-box" name="editCmtCnt" value={this.state.editCmtCnt}
                    placeholder="Leave your comment here..."
                    onChange={this.handleInputChange}></textarea>
                    <button onClick={()=>this.editComment()}
                    ><i className="fas fa-paper-plane"></i></button>
                </div>}
                {this.fillData().map(value=>(
                    <ReplyItem key={value.repId} 
                    actions={value.actions}
                    author={value.author}
                    avatar={value.avatar}
                    content={value.content}
                    datetime={value.datetime}
                    cmtCnt = {value.cmtCnt}
                    editComment={this.props.editComment}
                    repid={value.repId}
                    />
                 
                ))}
                {<div className="cmt-rep-box-cnt">
                    <textarea  className="cmt-rep-box" name="cmtCnt" value={this.state.cmtCnt}
                    placeholder="Leave your comment here..."
                    onChange={this.handleInputChange}></textarea>
                    <button onClick={this.postReply}
                    ><i className="fas fa-paper-plane"></i></button>
                </div>}
            </Comment>
        )
    }
}

export default CommentItem;