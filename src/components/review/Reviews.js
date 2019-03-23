import React from 'react';
import { Rate, Statistic, Progress, Icon, Divider, Tabs } from 'antd';
import './reviews.css';
import { changeTabs, calculateReviewScore } from '../../helpers/helper';
import ReviewList from './ReviewtList';
import ShareReview from './ShareReview';
import {Redirect} from 'react-router-dom';

class Review extends React.Component{

    constructor(props){
        super(props);
        this.state={
            redirect: false
        }
    }

    componentDidMount(){
        this.props.getReviewByProductId(this.props.id);
    }


    calculateStarPercentage = (star)=>{
        var reviews= [...this.props.reviews.reviews];
        if (this.props.reviews.reviews.length>0){
            return parseFloat(reviews.filter(value=>{
                return value.reviewScore === star
            }).length/reviews.length*100).toFixed(0);
        }
        return 0;
    }

    render(){
    //  console.log(this.props.location);
        const reviewScore = calculateReviewScore(this.props.reviews.reviews);
        return(
            <div className="review-section">
                <h2>Customer reviews</h2>
                <div className="review-header">
                    <div className="overall-score header-sec">
                        <h3>Average score</h3>
                        <Statistic value={reviewScore} suffix={<h4>/5</h4>}></Statistic>
                        <Rate allowClear allowHalf 
                        value={reviewScore} disabled></Rate>
                        <p>{(this.props.reviews.reviews.length +" votes" )}</p>
                    </div>
                    <div className="star-percentage header-sec">
                        <div>
                           <span>5 <Icon type="star"></Icon></span>
                           &nbsp;<Progress className="prog" type="line"
                            percent={this.calculateStarPercentage(5)} />
                        </div>
                        <div>
                           <span>4 <Icon type="star"></Icon></span>
                           &nbsp;<Progress className="prog" type="line" 
                           percent={this.calculateStarPercentage(4)} />
                        </div>
                        <div>
                           <span>3 <Icon type="star"></Icon></span>
                           &nbsp;<Progress className="prog" type="line"
                           percent={this.calculateStarPercentage(3)} />
                        </div>
                        <div>
                            <span>2 <Icon type="star"></Icon></span>
                            &nbsp;<Progress className="prog" type="line" 
                            percent={this.calculateStarPercentage(2)} />
                        </div>
                        <div>
                           <span>1 <Icon type="star"></Icon></span>
                           &nbsp;<Progress className="prog" type="line" 
                           percent={this.calculateStarPercentage(1)} />
                        </div>
                    </div>
                </div>
                <Divider />
                <Tabs onChange={changeTabs} 
		        defaultActiveKey="revList">
			<Tabs.TabPane key="revList" tab={<p><Icon type="bars"></Icon>
			&nbsp;Reviews list</p>}>
                <ReviewList reviews = {this.props.reviews}/>
			</Tabs.TabPane>
			<Tabs.TabPane key='write-rev' tab={<p><Icon type="message"></Icon>
			&nbsp;Share your reviews</p>}>
                {this.props.isLoggedIn?<ShareReview 
                addReview={this.props.addReview}
                productId={this.props.productId} />:<div>
                    Please login to share your review
                    <button onClick={()=>{
                        this.setState({
                            redirect: true
                        })
                    }}>Login</button>
                    {this.state.redirect?<Redirect to={{pathname: '/account/login',state: {from : this.props.location}}} />:''}
                </div>}
			</Tabs.TabPane>
		</Tabs>
            </div>
        )
    }
}

export default Review; 