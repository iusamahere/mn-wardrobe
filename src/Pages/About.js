import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Aboutus() 
{
    return (
      <Box>
        
      <Navbar/>
    
    <About></About>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Aboutus;