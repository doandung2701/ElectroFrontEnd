import React from 'react';
import { List, Tooltip} from 'antd';
import moment from 'moment';
import CommentItem from './Comment';
import { Badge } from 'react-bootstrap';
import { isAdmin } from '../../helpers/helper';
import './comment.css';

class CommentList extends React.Component{

    constructor(props){
      super(props);
      this.props.getCommentsByProductId(this.props.productId);
    }

    fillData = ()=>{
      if (this.props.comments.comments.length>0){
        return this.props.comments.comments.map((value,index)=>{
            return {
              actions: [<span>Reply to</span>],
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
              ),
              replies: value.replies,
              index,
              key: value.cmtId
            }
        })
      }
    }

    render(){
        return(
          <div style={{paddingRight: "50px"}}>
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
                    index={item.index}
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    replies = {item.replies}
                    >
                  </CommentItem>
                    )}
                >
                <input type="textarea" />
                </List>
              </div>
        )
    }

}

export default CommentList;