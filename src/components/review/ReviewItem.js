import React from 'react';
import { Comment } from 'antd';

class ReviewItem extends React.Component{
    render(){
        return(
            <Comment {...this.props}>
                {this.props.children}
            </Comment>
        )
    }
}

export default ReviewItem;