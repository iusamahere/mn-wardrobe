import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Contactus() 
{
    return (
      <Box>
        
      <Navbar/>
    
    <Contact></Contact>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Contactus;