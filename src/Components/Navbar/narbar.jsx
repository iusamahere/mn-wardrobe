import React from 'react'
import Logo from '../Navbar/logosmall.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'

function Navbar() {
   
    return(

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={Logo} alt="logo" style={{width:'38px'}} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto ">
        <li class="nav-item">
          <a class="nav-link active  text-uppercase" aria-current="page" href="/"><i class="fas fa-home"></i>  Home </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active  text-uppercase" aria-current="page" href="/contact"><i class="fas fa-envelope"></i>  Contact</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle   text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fab fa-shopify"></i>  Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Eastern</a></li>
            <li><a class="dropdown-item" href="#">Western</a></li>
            <li><a class="dropdown-item" href="#">Semi-Formals</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Saperates</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-uppercase"  href="#" tabindex="-1" aria-disabled="false"> <i class="fas fa-user"></i>  About</a>
        </li>
      </ul>
      <a class="nav-link active  text-uppercase" aria-current="page" href="#"><i class="fas fa-shopping-cart"></i>  Cart</a>
     
    </div>
  </div>
</nav>


    );

}

export default Navbar;
