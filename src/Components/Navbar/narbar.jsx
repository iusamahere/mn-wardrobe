import React from 'react'
import Logo from '../Navbar/logosmall.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import styled from 'styled-components'
const Nav = styled.div`
.bg-light {
  background: rgb(36, 26, 0);
  background: linear-gradient(
    90deg,
    rgba(36, 26, 0, 0.18000703699448528) 0%,
    rgba(164, 90, 15, 0.11558126668636204) 52%,
    rgba(102, 67, 1, 0.19121151878720233) 100%
  );
}
`
function Navbar() {
   
    return(
<Nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a href="/" id="logo"class="navbar-brand" href="/"><img src={Logo} alt="logo" style={{width:'38px'}} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto ">
        <li class="nav-item">
          <a id="ditem" class="nav-link active  text-uppercase" aria-current="page" href="/"><i class="fas fa-home"></i>  Home </a>
        </li>
        
        <li class="nav-item">
          <a id="ditem" class="nav-link active  text-uppercase" aria-current="page" href="/contact"><i class="fas fa-envelope"></i>  Contact</a>
        </li>
        
        <li class="nav-item dropdown">
          <a id="ditem" class="nav-link dropdown-toggle   text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fab fa-shopify"></i>  Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/eastern">Eastern</a></li>
            <li><a class="dropdown-item" href="/western">Western</a></li>
            <li><a class="dropdown-item" href="/semiformals">Semi-Formals</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/saperates">Saperates</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a id="ditem" class="nav-link active text-uppercase"  href="/about" tabindex="-1" aria-disabled="false"> <i class="fas fa-user"></i>  About</a>
        </li>
      </ul>
      <a id="cart" class="nav-link active  text-uppercase" aria-current="page" href="/cart"><i class="fas fa-shopping-cart"></i>  Cart</a>
     
    </div>
  </div>
</nav>
</Nav>

    );

}

export default Navbar;
