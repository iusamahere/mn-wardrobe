import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/narbar'
import Team from '../Components/Team/Team'
import Footer from '../Components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'


const Box = styled.div`
`

function Teams() 
{
    return (
      <Box>
        
      <Navbar/>
    
    <Team></Team>
    
     <Footer></Footer>
      </Box>
    );
  }
  
  export default Teams;