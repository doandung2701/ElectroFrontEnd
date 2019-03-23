
import {connect} from 'react-redux';
import { getReviewsByProductId, saveReview } from './ReviewAction';
import Review from './Reviews';
import {withRouter} from 'react-router-dom'

var mapStateToProps = state =>{
    return{
        reviews: state.reviews,
        isLoggedIn: state.authentication.isLoggedIn
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getReviewByProductId: (id)=>{
            dispatch(getReviewsByProductId(id))
        },
        addReview: (review)=>{
            dispatch(saveReview(review))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));