import React from 'react'
import './App.css'
import UI from './Component/UI'
import UI2 from './Component/UI2'
import UI3 from './Component/UI3'
import UI4 from './Component/UI4'
import UI5 from './Component/UI5'
import UI6 from './Component/UI6'
import UI7 from './Component/UI7'
import {theme} from './Component/Theme/Theme'
import { ThemeProvider } from '@mui/system'

// import UI from './Component/UI'
// import { Grid } from '@mui/material'



function App() {
 
  
  return (
    <>
    {/* <UI/> */}
    {/* <UI2/> */}
    {/* <UI3/> */}
    {/* <UI4/> */}
    {/* <UI5/> */}
    {/* <UI6/> */}
    <ThemeProvider theme={theme}>
    <UI7 />
    </ThemeProvider>

   
   
      
      
    </>
  )
}

export default App
