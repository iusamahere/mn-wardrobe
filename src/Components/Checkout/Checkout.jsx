  
import React from 'react'
import styled from 'styled-components'
import './Checkout.css'
const Checkout = styled.div`
body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
  }
  body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
    margin-top:40px;
  }
  
  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }
  
  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }
  
  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }
  
  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }
  
  .container {
    background: rgb(36, 26, 0);
    background: linear-gradient(
      90deg,
      rgba(36, 26, 0, 0.18000703699448528) 0%,
      rgba(164, 90, 15, 0.11558126668636204) 52%,
      rgba(102, 67, 1, 0.19121151878720233) 100%
    );
    padding: 5px 20px 15px 20px;
    border: 1px solid;
    border-color:#442a05b2;
    border-radius: 3px;
  }
  
  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  label {
    margin-bottom: 10px;
    display: block;
  }
  
  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }
  
  .btn {
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }
  
  
  a {
    color: #2196f3;
  }
  
  hr {
    border: 1px solid lightgrey;
  }
  
  span.price {
    float: right;
    color: grey;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1;
  }
  
  .popup {
    margin: 300px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 1s ease-in-out;
  }
  
  .popup h2 {
    margin-top: 0;
    color: #333;
    font-family: Tahoma, Arial, sans-serif;
  }
  .popup .close {
    position: absolute;
    top:15px;
    right: 10px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: red;
  }
  .popup .close:hover {
    color: #06D85F;
  }
  .popup .content {
    max-height: 30%;
    overflow: auto;
  }

`

const Checkoutpage = () => {
    return(
        <Checkout>
            <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">
      
        <div class="row">
          <div class="col-50">
            <h3>Shipping<span> Address</span></h3>
            <label id="person" for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
            <label  id="person" for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"></input>
            <label  id="person" for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
            <label  id="person" for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"></input>

          </div>

          
          
        </div>
        <h5 id="note">Note: This step is irreversible</h5>

        <div class="formgroup">        
				  <div class=" feilds">
					
          <form method="get" action={"#popup1"}>
    <button id="btn" class="btn">Confirm Order</button>
</form>
				  </div>
          <div id="popup1" class="overlay">
	<div class="popup">
	
		<a class="close" href="/">&times;</a>
		<div class="content" >
			Order Confirmed! Thanks for choosing MN Wardrobe.
		</div>
	</div>
</div>
				</div>
			







      </form>
    </div>
  </div>
  <div class="col-25">
    <div class="container">
      <h4 id="cartbox" >Cart <span class="price" style={{color:"black"}}><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>
      <p><a  id="cartbox" href="#">Product 1</a> <span  id="cartprice" class="price">$15</span></p>
      <p><a id="cartbox"  href="#">Product 2</a> <span  id="cartprice" class="price">$5</span></p>
      <p><a id="cartbox"  href="#">Product 3</a> <span  id="cartprice" class="price">$8</span></p>
      <p><a id="cartbox"  href="#">Product 4</a> <span  id="cartprice" class="price">$2</span></p>
      
      <p>Total <span class="price" style={{color:"black"}}><b>$30</b></span></p>
    </div>
  </div>
</div>
         
        </Checkout> 
    )
}
export default Checkoutpage;
