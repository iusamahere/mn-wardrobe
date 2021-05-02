  
import React from 'react'
import styled from 'styled-components'
import './Contact.css'
const Cont = styled.div`
body {
    background-color: #444442;
    padding-top: 85px;
}


`

const Contact = () => {
    return(
        <Cont>
            <div class="container">
	<div class="row">
			<h1>contact<span> us</span></h1>
	</div>
	<div class="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Full Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Instagram Username</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" >
					<input type="text" required />
					<label>Whatsapp Number</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" >
					<input type="text" required />
					<label>City</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" >
					<input type="text"  />
					<label>Product Name (optional)</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
			<ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
	</div>
	
</div>

         
        </Cont> 
    )
}
export default Contact;
