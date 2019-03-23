import React from 'react';

class ReviewFilter extends React.Component{
    render(){
        return(
            <div className="customer-rev border-bottom left-side py-2 review-filter">
            <h3 className="agileits-sear-head mb-3">Customer Review</h3>
            <ul>
              <li>
                <input type="radio" value={5} onChange={this.props.onChange} name="rdReview" className="checked"></input>
                <span >
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>5</span>
                </span>
              </li>
              <li>
              <input type="radio" value={4}  onChange={this.props.onChange} name="rdReview" className="checked"></input>
                <span >
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>4 (At least 4 stars)</span>
                </span>
              </li>
              <li>
              <input type="radio" value={3}  onChange={this.props.onChange} name="rdReview" className="checked"></input>
                <span >
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>3 (At least 3 stars)</span>
                </span>
              </li>
              <li>
              <input type="radio" value={2}  onChange={this.props.onChange} name="rdReview" className="checked"></input>
                <span >
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>2 (At least 2 stars)</span>
                </span>
              </li>
              <li>
              <input type="radio" value={1}  onChange={this.props.onChange} name="rdReview" className="checked"></input>
                <span >
                  <i className="fas fa-star"></i>
                  <span>1 (At least 1 star)</span>
                </span>
              </li>
            </ul>
          </div>
        )
    }
}

export default ReviewFilter;