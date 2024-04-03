import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
       <Typography variant='h5'>My App</Typography> &nbsp;
       <Button variant='contained' color='success'>
        <Link to={'/signup'} style={{textDecoration:"none",color:"white"}}>Signup</Link>
        </Button> &nbsp;&nbsp;

       <Button variant='contained' color='secondary'>
       <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Login</Link>
       </Button>
    
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
