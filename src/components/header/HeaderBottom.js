import React from 'react';
import {Link} from 'react-router-dom';
import { openCart } from '../../helpers/helper';
import {Badge} from 'react-bootstrap';
import SearchProductContainer from '../search/SearchProductContainer';

class HeaderBottom extends React.Component{
    render(){
        return(
        <div className="header-bot">
        <div className="container">
          <div className="row header-bot_inner_wthreeinfo_header_mid">
            {/*<!-- logo -->*/}
            <div className="col-md-3 logo_agile">
              <h1 className="text-center">
                <Link to="/" className="font-weight-bold font-italic">
                  <img src="/images/logo2.png" alt=" " className="img-fluid"/>Electro Store
                </Link>
              </h1>
            </div>
            {/*<!-- //logo -->*/}
            {/*<!-- header-bot -->*/}
            <div className="col-md-9 header mt-4 mb-md-0 mb-4">
              <div className="row">
                {/*<!-- search -->*/}
                <SearchProductContainer />
                {/*<!-- //search -->*/}
                {/*<!-- cart details -->*/}
                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                  <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                      <input type="hidden" name="cmd" value="_cart"/>
                      <input type="hidden" name="display" value="1"/>
                      <button style={{overflow: "visible"}}
                      onClick={()=>openCart()}
                      className="btn w3view-cart" name="submit" value="">
                        <i className="fas fa-cart-arrow-down"></i>          
                         <Badge style={{position: 'absolute',top: '-15%'}}
                         variant="danger" >{this.props.cartLength}</Badge>
                      </button>
                  </div>
                </div>
                {/*<!-- //cart details -->*/}
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}

export default HeaderBottom;