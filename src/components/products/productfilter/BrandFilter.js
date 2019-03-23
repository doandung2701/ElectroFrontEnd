import React from 'react';
import { getBrandsByCategory } from '../../brands/BrandAction';
import {connect} from 'react-redux';

class BrandFilter extends React.Component{
    
    constructor(props){
        super(props);
        this.props.getBrandsByCategory([]);
    }

    onRadioChange = e => {
        if (e.target.checked) console.log(e.target.type);

    }

    render(){
        var brands = this.props.brands;
        console.log(this.props.brands);
        return(
          <div className="left-side border-bottom py-2 brand-filter">
          <h3 className="agileits-sear-head mb-3">Brands</h3>
          <ul>
            {brands.map(value=>(
                <li className="li-filter-brand"key={value.brandId}>
                    <input type="radio" name={`rdBrands`} value={value.brandId}
                    onChange={this.onRadioChange} className="checked"/>
                    <span className="span">{value.brandName}</span>
                </li>
            ))}
          </ul>
        </div>
        )
    }
}

var mapStateToProps = state=>{
    return{
        brands: state.brands.brandsByCategory,
        isGetting: state.brands.isGettingBrandsByCategory
    }
}

var mapDispatchToProps = dispatch=>{
    return{
        getBrandsByCategory: (catId)=>{
            dispatch(getBrandsByCategory(catId));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrandFilter);