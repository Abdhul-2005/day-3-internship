import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{margin:"80px"}}>
        <Typography variant="h3">Login Page</Typography><br></br><br></br>
        <TextField label="Enter name" variant="outlined"/><br></br><br></br>
        <TextField label="Password" type='password' variant='outlined'/><br></br><br></br>
        <Button variant="contained" color="secondary">Login</Button>

    </div>
  )
}

export default Login
