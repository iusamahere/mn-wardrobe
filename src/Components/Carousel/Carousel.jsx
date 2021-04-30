 
import React from 'react'
import styled from 'styled-components'


const Crsl = styled.div
`
`

const Carosel = () => {
    return(

<Crsl>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="c2.png" data-slide-to="0" class="active"></li>
    <li data-target="c3.jpg" data-slide-to="1"></li>
    <li data-target="c4.jpg" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="c2.png" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="c3.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="c4.jpg" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



</Crsl>
    );
}
export default Carosel;
