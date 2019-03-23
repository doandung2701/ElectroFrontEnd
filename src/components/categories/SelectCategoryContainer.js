
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getAllCategories } from './CategoryAction';
import SelectCategory from './SelectCategory';

var mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getAllCategories : ()=>{
            dispatch(getAllCategories());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectCategory));