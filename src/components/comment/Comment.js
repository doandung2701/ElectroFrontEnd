import React from 'react';
import { Comment, Tooltip, Icon } from 'antd';
import moment from 'moment';
import { Badge } from 'react-bootstrap';
import { isAdmin } from '../../helpers/helper';

class CommentItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            repBoxVisible: false
        }
    }

    fillData = ()=>{
        if (this.props.replies&&this.props.replies.length>0){
          return this.props.replies.map(value=>{
              return {
                actions: [<span onClick={()=>this.setState({
                    repBoxVisible: !this.state.repBoxVisible
                })}>Reply to</span>],
                author: <span>{value.user.username}&nbsp;
                 {isAdmin(value.user.roles)&&<Badge variant="primary">Admin</Badge>}</span> ,
                avatar: value.user.avatar,
                content: (
                  <div>
                    <p>{value.cmtCnt}</p>
                  </div>
                ),
                datetime: (
                  <Tooltip title={moment(value.cmtDate).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(value.cmtDate).fromNow()}</span>
                  </Tooltip>
                )
              }
          })
        }
        return [];
      }

    render(){
        return(
            <Comment {...this.props}>
                {this.fillData().map(value=>(
                    <Comment key={value.cmtId}
                    actions={value.actions}
                    author={value.author}
                    avatar={value.avatar}
                    content={value.content}
                    datetime={value.datetime}
                    />
                ))}
                {this.state.repBoxVisible&&<div className="cmt-rep-box-cnt">
                    <textarea  className="cmt-rep-box"></textarea>
                    <button><i className="fas fa-paper-plane"></i></button>
                </div>}
            </Comment>
        )
    }
}

export default CommentItem;