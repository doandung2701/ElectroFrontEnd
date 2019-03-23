
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BestSellerList from './BestSellerList';
import { getTopViewList } from '../ProductAction';

var mapStateToProps = state =>{
    return{
        topViewList: state.topViewList
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getTopView: (pageable)=>{
            dispatch(getTopViewList(pageable));
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BestSellerList));