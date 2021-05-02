import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Western from '../Components/Western/Western'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Cat2() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Western></Western>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Cat2;