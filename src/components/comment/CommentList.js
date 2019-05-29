import React from 'react';
import { List, Tooltip, message} from 'antd';
import moment from 'moment';
import CommentItem from './Comment';
import { Badge } from 'react-bootstrap';
import { isAdmin} from '../../helpers/helper';
import './comment.css';

class CommentList extends React.Component{

    constructor(props){
      super(props);
      this.props.getCommentsByProductId(this.props.productId);
      this.state = {
        cmtCnt: '',
        productId: this.props.productId,
      }
    }

    openRepBox = (index)=>{
      var repBoxs = document.getElementsByClassName('cmt-rep-box-cnt');
      for (let repBox of repBoxs){
        repBox.classList.remove("active");
      }
      repBoxs[index].classList.add("active");
    }

    handleInputChange = (e)=>{
      var name = e.target.name;
      var value = e.target.value;
      this.setState({
          [name]: value
      })
  }

  toggleEditCmtBox = (i1)=>{
    var cmtItem = document.getElementsByClassName("cmt-item")[i1];
    var editCmtBox = cmtItem.getElementsByClassName("edit-cmt-box-cnt");
    editCmtBox[0].classList.toggle("active");
  }

    fillData = ()=>{
      if (this.props.comments.comments.length>0){
        return this.props.comments.comments.map((value,index)=>{
            return {
              actions: [<span onClick={()=>this.openRepBox(index)}><i className="fas fa-reply"></i>&nbsp;
              Reply to&nbsp;</span>,
              this.props.userId===value.user.userId&&<span onClick={()=>this.toggleEditCmtBox(index)}>
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
              replies: value.replies&&value.replies.length>0?value.replies.sort((prev,current)=>{
                return moment(prev.cmtDate)-moment(current.cmtDate);
            }):[],
              index,
              key: value.cmtId,
              cmtCnt : value.cmtCnt
            }
        })
      }
    }

    postComment = ()=>{
      if (this.state.cmtCnt.length>0){
      this.props.postComment(this.state);
      this.setState({
        cmtCnt: ''
      })}
      else {
        message.info("The comment content must not be null",3);
      }
    }

    render(){
        return(
          <div style={{paddingRight: "50px"}}>
          <h3>Questions & Answers (Comments)</h3>
             <div className="cmt-box-cnt">
              <textarea  className="cmt-box" value={this.state.cmtCnt} onChange={this.handleInputChange}
               name="cmtCnt" placeholder="Leave your comment here..."
                    ></textarea>
              <button onClick={this.postComment}
                ><i className="fas fa-paper-plane"></i></button>
            </div>
            <List 
            pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 10,
                  }}
                className="comment-list"
                header={`${this.props.comments.comments.length} replies`}
                itemLayout="vertical"
                dataSource={this.fillData()}
                renderItem={item => (
                <CommentItem
                    key={item.key}
                    parent = {item.key}
                    openrepbox = {this.openRepBox}
                    productid={this.props.productId}
                    postreply = {this.props.postReply}
                    index={item.index}
                    userId = {this.props.userId}
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    replies = {item.replies}
                    editComment = {this.props.editComment}
                    cmtCnt ={item.cmtCnt}
                    >
                  </CommentItem>
                    )}
                >
                </List>
             
              </div>
        )
    }

}

export default CommentList;