import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Footer from '../Components/Footer/Footer'
import Products from'../Components/Products/Products'
import Carousell from '../Components/Carousel/Carousel'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Homesc() 
{
    return (
      <Box>
      <Whatsapp></Whatsapp>
      <Navbar/>
    <Carousell></Carousell>
     <Products></Products>
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Homesc;