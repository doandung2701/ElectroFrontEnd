import React from 'react';
import './checkout.css';
import { calculateSubtotals, topTop } from '../../helpers/helper';
import { Button } from 'react-bootstrap';


export default class CheckOutCart extends React.Component{

	onIncreaseQty = (item)=>{
        this.props.changeCartItemQty({
            prodDetailId: item.prodDetailId,
            currentQty: item.currentQty,
            nextQty: item.currentQty +1 
        }, {
            prodDetailId: item.prodDetailId
        })
	}
	
	
	onDecreseQty = (item)=>{
        this.props.changeCartItemQty({
            prodDetailId: item.prodDetailId,
            currentQty: item.currentQty,
            nextQty: item.currentQty -1 
        }, {
            prodDetailId: item.prodDetailId
        })
    }

    render(){
        return(
			<div className="checkout-right" style={{marginTop: 50}}>
			<h4 className="mb-sm-4 mb-3">Your shopping cart contains:
				<span>{this.props.cart.items.length} Products</span>
			</h4>
			<div className="table-responsive">
				<table className="timetable_sub">
					<thead>
						<tr>
							<th>SL No.</th>
							<th>Product</th>
							<th>Quantity</th>
							<th>Product Name</th>
		  
							<th>Price</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{this.props.cart.items.map((value,index)=>
							(<tr key={value.prodDetailId}
							className="rem1">
							<td className="invert">{index+1}</td>
							<td className="invert-image">
								<a href="single.html">
									<img style={{maxWidth: 150,maxHeight: 150,height: "75px !important",
									width: '75px !important'}}
									src={value.thumbnail} alt=" " className="img-responsive"/>
								</a>
							</td>
							<td className="invert">
								<div className="quantity">
									<div className="quantity-select">
										<div onClick={()=>this.onDecreseQty(value)}
										className="entry value-minus">&nbsp;</div>
										<div className="entry value">
											<span>{value.currentQty}</span>
										</div>
										<div onClick={()=>this.onIncreaseQty(value)}
										className="entry value-plus active">&nbsp;</div>
									</div>
								</div>
							</td>
							<td className="invert">{value.name +" "+value.color}</td>
							<td className="invert">${(value.discount>0&&new Date(value.discountExDate)>Date.now()?
					value.price-(value.price*value.discount/100):value.price)*value.currentQty}</td>
							<td className="invert">
								<div className="rem">
									< div onClick = {
										() => this.props.changeCartItemQty({
											prodDetailId: value.prodDetailId,
											currentQty: value.currentQty,
											nextQty: 0,
										}, {
											prodDetailId: value.prodDetailId
										})
									}
									 className="close1"> 
									</div>
								</div>
							</td>
						</tr>))}
						<tr>
							<td colSpan="6"><span style={{fontWeight: 'bolder'}}>Subtotals:
								</span>&nbsp;${calculateSubtotals(this.props.cart.items)}</td>
						</tr>
					</tbody>
				</table>
				<Button style={{marginTop: 20}}
				variant="primary" size="sm" onClick={this.props.onNext}>Next step</Button>
			</div>
			</div>
        )
    }

}