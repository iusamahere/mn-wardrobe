import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Eastern from '../Components/Eastern/Eastern'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Cat1() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Eastern></Eastern>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Cat1;