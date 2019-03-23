import React from 'react';
import {Link} from 'react-router-dom';
 
const BreadCrumb = (props)=>(
    <div className="services-breadcrumb">
		<div className="agile_inner_breadcrumb">
			<div className="container">
				<ul className="w3_short">
					<li>
						<Link to="/">Home</Link>
						<i>|</i>
					</li>
					<li>{props.name}</li>
				</ul>
			</div>
		</div>
	</div>
)

export default BreadCrumb;