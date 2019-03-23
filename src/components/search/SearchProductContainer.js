
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './Search';
import { searchProductsByName, clearSearchProduct } from './SearchAction';

var mapStateToProps = state =>{
    return{
        searchProducts: state.searchProducts
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        searchProductsByName: (name)=>{
            dispatch(searchProductsByName(name))
        },
        clearSearch: ()=>{
            dispatch(clearSearchProduct())
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));