import React from 'react';
import { Comment, message } from 'antd';

class ReplyItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cmtCnt: this.props.cmtCnt,
            cmtId: this.props.repid,
        }
    }

    handleInputChange = (e)=>{
      var name = e.target.name;
      var value = e.target.value;
      this.setState({
          [name]: value
      })
  }

  editComment = ()=>{
      if (this.state.cmtCnt.length>0){
          this.props.editComment(this.state);
         
      }else{
          message.warning("The content must not be null!");
      }
  }

    render(){
        return(
            <Comment actions={this.props.actions} avatar={this.props.avatar} content={this.props.content}
            datetime={this.props.datetime} author={this.props.author}
                    >
                    <div className="edit-cmt-rep-box-cnt">
                    <textarea  className="edit-cmt-rep-box" name="cmtCnt" value={this.state.cmtCnt}
                    placeholder="Leave your comment here..."
                    onChange={this.handleInputChange}></textarea>
                    <button onClick={this.editComment}
                    ><i className="fas fa-paper-plane"></i></button>
                </div>
                    </Comment>
        )
    }
}

export default ReplyItem;