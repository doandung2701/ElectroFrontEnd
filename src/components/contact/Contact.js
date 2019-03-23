import React from 'react';
import {Fragment} from 'react';

class Contact extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="contact py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>C</span>ontact
				<span>U</span>s
			</h3>
			<div className="row contact-grids agile-1 mb-5">
				<div className="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-map-marker-alt rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
						<p>1PO Box 8568954 Melbourne
							<label>Australia.</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-phone rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
						<p>+(0121) 121 121
							<label>+(0121) 121 122</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-envelope-open rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
						<p>
							<a href="mailto:info@example.com">info@example1.com</a>
							<label>
								<a href="mailto:info@example.com">info@example2.com</a>
							</label>
						</p>
					</div>
				</div>
			</div>

			<form action="#" method="post">
				<div className="contact-grids1 w3agile-6">
					<div className="row">
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">Name</label>
							<input type="text" className="form-control" name="Name" placeholder="" required=""/>
						</div>
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">E-mail</label>
							<input type="email" className="form-control" name="Email" placeholder="" required=""/>
						</div>
					</div>
					<div className="contact-me animated wow slideInUp form-group">
						<label className="col-form-label">Message</label>
						<textarea name="Message" className="form-control" placeholder="" required=""> </textarea>
					</div>
					<div className="contact-form">
						<input type="submit" value="Submit" />
					</div>
				</div>
			</form>
		</div>
	</div>

	<div className="map mt-sm-0 mt-4">
    <iframe src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Th%E1%BB%8D%20Am%2C%20Li%C3%AAn%20Ninh%2C%20Thanh%20Tr%C3%AC+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
        allowFullScreen title="map"
    ></iframe>
	</div>
    </Fragment>
        )
    }
}

export default Contact;