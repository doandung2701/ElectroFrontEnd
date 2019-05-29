import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { getCommentsByProductId, postReply, postComment, editComment } from './CommentAction';
import CommentList from './CommentList';

var mapStateToProps = state =>{
    return{
        comments: state.comments,
        isLoggedIn: state.authentication.isLoggedIn,
        userId : state.authentication.userId
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getCommentsByProductId: (id)=>{
            dispatch(getCommentsByProductId(id))
        },
        postReply: (reply)=>{
            dispatch(postReply(reply));
        },
        postComment: (comment)=>{
            dispatch(postComment(comment));
        },
        editComment: (comment)=>{
            dispatch(editComment(comment));
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentList));