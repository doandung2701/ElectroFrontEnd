import React from 'react';

class PriceFilter extends React.Component{
    render(){
        return(
          <div className="left-side border-bottom py-2 price-filter">
          <h3 className="agileits-sear-head mb-3">Price</h3>
          {/* <ul>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Accessories</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Cameras & Photography</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Car & Vehicle Electronics</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Computers & Accessories</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">GPS & Accessories</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Headphones</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Home Audio</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Home Theater, TV & Video</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Mobiles & Accessories</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Portable Media Players</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Tablets</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Telephones & Accessories</span>
            </li>
            <li>
              <input type="checkbox" className="checked"/>
              <span className="span">Wearable Technology</span>
            </li>
          </ul> */}
          <input type="number" value={this.props.priceFrom} 
           name="priceFrom" onChange={this.props.onChange} min={0} /> - <input type="number"
            value={this.props.priceTo} onChange={this.props.onChange} name="priceTo" min={0} />
        </div>
        )
    }
}

export default PriceFilter;