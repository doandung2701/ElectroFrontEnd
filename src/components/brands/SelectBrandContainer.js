
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SelectBrand from './SelectBrand';
import { getAllBrands } from './BrandAction';

var mapStateToProps = state =>{
    return{
        brands: state.brands
    }
}

var mapDispatchToProps = dispatch =>{
    return {
        getAllBrands : ()=>{
            dispatch(getAllBrands());
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectBrand));