  
import React from 'react'
import styled from 'styled-components'
import './Contact.css'
const Cont = styled.div`
body {
	background-color: #25274d;
  }
  .contact {
	padding: 4%;
	height: 700px;
  }
  .feilds {
	width: 580px;
	margin-left: 15px;
  }
  .col-md-3 {
	background: rgb(255, 255, 255);
	background: linear-gradient(
	  90deg,
	  rgba(255, 255, 255, 1) 0%,
	  rgba(200, 179, 163, 1) 0%,
	  rgba(255, 232, 210, 1) 53%,
	  rgba(195, 174, 161, 1) 100%
	);
	padding: 4%;
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;
  }
  .contact-info {
	margin-top: 10%;
  }
  .contact-info img {
	margin-bottom: 15%;
	margin-left: 55px;
  }
  .contact-info img.active {
	width: 120px;
	margin-top: 80px;
	margin-left: 34px;
  }
  .contact-info h2 {
	margin-bottom: 10%;
  }
  .col-md-9 {
	background: #fff;
	padding: 3%;
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
  }
  .contact-form label {
	font-weight: 600;
  }
  .contact-form button {
	background: #25274d;
	color: #fff;
	font-weight: 600;
	width: 25%;
	transition: all 1s;
	background: rgb(77, 50, 20);
	background: linear-gradient(
	  90deg,
	  rgba(77, 50, 20, 1) 4%,
	  rgba(147, 96, 38, 1) 57%,
	  rgba(147, 96, 38, 1) 58%,
	  rgba(147, 96, 38, 1) 62%,
	  rgba(120, 64, 0, 1) 85%,
	  rgba(69, 55, 0, 1) 100%
	);
  }
  .contact-form button:focus {
	box-shadow: none;
	color: yellow;
  }
  .contact-form button:hover {
	width: 100%;
  }
  .formgroup {
	width: 850px;
  }
  @media (max-width: 858px) {
	.feilds {
	  width: 420px;
	}
	.formgroup {
	  width: 450px;
	}
  }
`

const Contact = () => {
    return(
        <Cont>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="contact"></img>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
        <img class="active" src="wardlogo.png" alt="MN Wardrobe"></img>
			</div>
		</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="formgroup">
				  <label class="control-label col-sm-2" for="fname">Full Name:</label>
				  <div class="feilds">          
					<input type="text" class="form-control" id="fname" placeholder="Enter Full Name" name="fname"  required></input>
				  </div>
				</div>
				<div class="formgroup">
				  <label class="control-label col-sm-2" for="wname">Number:</label>
				  <div class="feilds">          
					<input type="tel" class="form-control" id="lname" placeholder="Enter Whatsapp Number " name="lname"  required></input>
				  </div>
				</div>
				<div class="formgroup">
				  <label class="control-label col-sm-2" for="email">Email:</label>
				  <div class="feilds">
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required></input>
				  </div>
				</div>
        <div class="formgroup">
				  <label class="control-label col-sm-2" for="email">Product Name:</label>
				  <div class="feilds">
					<input type="email" class="form-control" id="email" placeholder="Enter Product details ( If Applicable )" name="email"></input>
				  </div>
				</div>
				<div class="formgroup">
				  <label class="control-label col-sm-2" for="comment" required>Comment:</label>
				  <div class="feilds">
					<textarea class="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div class="formgroup">        
				  <div class=" feilds">
					<button type="submit" class="btn btn-default">Send</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

         
        </Cont> 
    )
}
export default Contact;
