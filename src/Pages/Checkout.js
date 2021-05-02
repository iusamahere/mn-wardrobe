import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Checkout from '../Components/Checkout/Checkout'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Checkouts() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Checkout></Checkout>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Checkouts;