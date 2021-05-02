import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Saperates from '../Components/Saperates/Saperates'
import Footer from '../Components/Footer/Footer'
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Cat4() 
{
    return (
      <Box>
                <Whatsapp></Whatsapp>
      <Navbar/>
    
    <Saperates></Saperates>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Cat4;