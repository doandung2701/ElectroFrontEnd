import React from 'react';
import { Rate, message } from 'antd';

class ShareReview extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            reviewScore: 0,
            reviewHeader: '',
            reviewContent: '',
            productId: this.props.productId
        }
    }

    handleRateChange = (score)=>{
        this.setState({
            reviewScore: score
        })
    }

    handleInputChange = (e)=>{
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    addReview = ()=>{
        if (this.state.reviewContent.length>0){
            this.props.addReview(this.state);
            this.setState({
                reviewScore: 0,
                reviewHeader: '',
                reviewContent: '',
            })
        }else{
            message.warning("Review content must not be null!");
        }
    }

    render(){
        return(
            <div className="share-review">
                <h3>Share your review</h3>
                <div className="input-section">
                    <div>Your score:&nbsp;&nbsp;<Rate allowClear value={this.state.reviewScore}
                        onChange={this.handleRateChange}
                    ></Rate></div>
                    <div>
                    <label htmlFor="reviewHeader">Review Header (nullable): </label>
                    <input type="text" id="reviewHeader" name="reviewHeader"
                    value={this.state.reviewHeader} onChange={this.handleInputChange}
                    placeholder="Header..."/>
                    </div>
                    <div>
                    <label htmlFor="reviewContent">Type your review below: </label>
                    {/* <br/> */}
                    <textarea name="reviewContent" id="reviewContent"
                    value={this.state.reviewContent} onChange={this.handleInputChange}                    
                    placeholder="Your review..."/>
                    {/* <br /> */}
                    </div>
                    <button id="btn-sm" onClick={this.addReview}>Submit</button>
                </div>
            </div>
        )
    }

}

export default ShareReview;