import React from 'react';
import BestSellerItem from './BestSellerItem';
import './BestSeller.css';
import { Skeleton } from 'antd';

class BestSellerList extends React.Component{

    constructor(props){
        super(props);
        this.props.getTopView({
            page: 1,
            rows: 10
        })
    }

    render(){
        var topView = this.props.topViewList.topView;
        var loading = this.props.topViewList.isGetting;
        return(
            <div className="f-grid py-2">
                <h3 className="agileits-sear-head mb-3">Most Viewed</h3>
                <Skeleton loading={loading} active>
                <div className="box-scroll">
                  <div className="scroll">                
                  {topView.map(value=>(
                        <BestSellerItem value={value} key={value.productId} />
                  ))}
              </div>
              </div>
              </Skeleton>
              </div>
        )
    }
}

export default BestSellerList;