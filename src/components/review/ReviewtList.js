import React from 'react';
import { List, Tooltip, Rate } from 'antd';
import moment from 'moment';
import ReviewItem from './ReviewItem';

class ReviewList extends React.Component{

    fillData = ()=>{
      if (this.props.reviews.reviews.length>0){
        return this.props.reviews.reviews.map(value=>{
            return {
              actions: [<span>Reply to</span>,<Rate allowClear allowHalf defaultValue={0} 
                value={value.reviewScore} disabled></Rate>],
              author: value.user.username,
              avatar: value.user.avatar,
              content: (
                <div>
                  <h4>{value.reviewHeader}</h4>
                  <p>{value.reviewContent}</p>
                </div>
              ),
              datetime: (
                <Tooltip title={moment(value.reviewTime).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment(value.reviewTime).fromNow()}</span>
                </Tooltip>
              )
            }
        })
      }
    }

    render(){
        // if (this.props.reviews.reviews.length===0){
        //   return <div>No review</div>
        // }
        return(
            <List loadMore="Show more"
                className="comment-list"
                header={`${this.props.reviews.reviews.length} reviews`}
                itemLayout="vertical"
                dataSource={this.fillData()}
                renderItem={item => (
                <ReviewItem
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    >
                    {/* <Comment  actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime} /> */}
                    </ReviewItem>
                    )}
                />
        )
    }

}

export default ReviewList;