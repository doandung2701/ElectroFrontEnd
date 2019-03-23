import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { getCommentsByProductId } from './CommentAction';
import CommentList from './CommentList';

var mapStateToProps = state =>{
    return{
        comments: state.comments,
        isLoggedIn: state.authentication.isLoggedIn
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getCommentsByProductId: (id)=>{
            dispatch(getCommentsByProductId(id))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentList));