import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Cartpage() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Cart></Cart>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Cartpage;