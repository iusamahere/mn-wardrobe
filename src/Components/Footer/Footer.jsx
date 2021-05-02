 
import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const Footr = styled.div
`
`

const Footer = () => {
    return(

<Footr>

<head>

	<meta charset="utf-8"></meta>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	<meta name="keywords" content="footer, address, phone, icons" />

	<title>Footer With Address And Phones</title>
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
    <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></link>
	<link rel="stylesheet" href="style.css"></link>

</head>

	<body>
		<div class="main"> </div>
		<footer class="footer-distributed">

			<div class="footer-left">

				<h3>MN<span>Wardrobe</span></h3>

				<p class="footer-links">
					<a href="/">Home</a>
					·
					<a href="/team">Our Team</a>
					·
					
					<a href="/about">About</a>
					·
					
					<a href="/contact">Contact</a>
				</p>

				<p class="footer-company-name">Muhammad Usama &copy; 2021</p>
			</div>

			<div class="footer-center">


				<div>
					<i class="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@MnWardrobe.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the brand</span>
					something about the brand named MN Wardrobe
				</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/mahnoor.nawaz.56"><i class="fa fa-facebook"></i></a>
					
					<a href="https://instagram.com/mnwardrobe_?igshid=1gzhzvw3wregk"><i class="fa fa-instagram"></i></a>

				</div>

			</div>

		</footer>

	</body>



</Footr>
    );
}
export default Footer;
