
import React from 'react'
import Header from '../Header/Header'
import { Box } from '@mui/material'
import Footer from '../Footer/Footer'


interface wrapperProps {
  children: React.ReactNode
}
const Wrapper = (props:wrapperProps) => {
  const {children}=props
  return (
    <div>
       
<Header />

<Box className="body_content">
  {children}
  </Box>

<Footer />
    </div>
  )
}

export default Wrapper
