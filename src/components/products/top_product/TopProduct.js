import React from 'react';
import TopProductRight from './top_product_right/TopProductRight';
import {Fragment} from 'react';
import Banner from '../../banner/Banner';
import TopProductLeftContainer from './top_product_left/TopProductLeftContainer';
import Banner2 from '../../banner/Banner2';

class TopProduct extends React.Component{

    render(){
        return(
          <Fragment>
            {this.props.location.pathname==='/'?<Banner />:<Banner2/>}
            <div className="ads-grid py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            {/*<!-- tittle heading -->*/}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>O</span>ur
              <span>N</span>ew
              <span>P</span>roducts</h3>
            {/*<!-- //tittle heading -->*/}
            <div className="row">
              <TopProductLeftContainer location={this.props.location} match={this.props.match} />
              {/*<!-- product right -->*/}
              <TopProductRight location={this.props.location} history={this.props.history}/>
              {/*<!-- //product right -->*/}
            </div>
          </div>
        </div>
        </Fragment>
        )
    }
}

export default TopProduct;