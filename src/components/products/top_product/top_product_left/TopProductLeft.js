import React, {Fragment}from 'react';
import ProductSectionContainer from './ProductSectionContainer';
import SecondTopProductSection from './SecondTopProductSection';
import ThirdTopProductSection from './ThirdTopProductSection';
import FourthTopProductSection from './FourthTopProductSection';

class TopProductLeft extends React.Component{

    render(){
        return(
            <div className="agileinfo-ads-display col-lg-9">
            <div className="wrapper" id="VCL">
                <ProductSectionContainer location={this.props.location}/>
                {this.props.location.pathname==="/" ?<Fragment><SecondTopProductSection />
                <ThirdTopProductSection />
                <FourthTopProductSection /></Fragment>:''}
                
            </div>
          </div>
        )
    }
}

export default TopProductLeft;