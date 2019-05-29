import React from 'react';
import BestSellerListContainer from '../../best_seller/BestSellerListContainer';
import PriceFilter from '../../productfilter/PriceFilter';
import ReviewFilter from '../../productfilter/ReviewFilter';
import BrandFilter from '../../productfilter/BrandFilter';

class TopProductRight extends React.Component{

    constructor(props){
      super(props);
      this.state={
        priceFrom: 0,
        priceTo: 0,
        rdReview: 0,
        rdBrands: ''
      }
    }

    handleInputChange = e=>{
      var target = e.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name]: value
      })
    }

    render(){
        return(
            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
            <div className="side-bar p-sm-4 p-3">
              <div className="search-hotel border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                <form action="#" method="post">
                  <input type="search" placeholder="Product name..." name="search" required=""/>
                  <input type="submit" value=" "/>
                </form>
              </div>
              {/*<!-- best seller -->*/}
              <BestSellerListContainer />
              <PriceFilter priceFrom={this.state.priceFrom} priceTo={this.state.priceTo}
              onChange={this.handleInputChange}/>
              <ReviewFilter onChange={this.handleInputChange}/>
              <BrandFilter onChange={this.handleInputChange} />
              {/*<!-- //best seller -->*/}
            </div>

          </div>
        )
    }
}

export default TopProductRight;