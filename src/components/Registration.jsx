import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{margin:"80px"}}>
      <Typography variant="h3">Registration Form</Typography>
      <TextField label="Enter name" variant="outlined"/><br></br><br></br>
      <TextField type="password" label="Enter password" variant="outlined"/><br></br><br></br>
      <TextField type="text" label="Enter Phone number" varient="outlined"/><br></br><br></br>
      <TextField label="Enter Address" varient="outlined"/><br></br><br></br>
      <Button variant="contained" color='success'>Register</Button>
    </div>
  )
}

export default Registration
