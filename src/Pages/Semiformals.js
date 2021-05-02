import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Semiformals from '../Components/Semiformals/Semiformals'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Cat3() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Semiformals></Semiformals>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Cat3;