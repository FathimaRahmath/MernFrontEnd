import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Container, Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    console.log(users)
  }
  const addHandler=()=>{
    console.log("clicked", users);
    axios.post("http://localhost:3005/api/employees/add", users)
      .then((res) => {
        console.log(res)
        alert(res.data.message)
        navigate('/login')
       })
      .catch((err) => {
        console.log(err);
    })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="sm" style={{ backgroundColor: '#C8E6C9', border: 'solid 3px pink', padding: '20px' }}>
        <Typography variant='h5' align='center'>SIGNUP FORM</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='Name' fullWidth
              name="name"
            onChange={inputHandler}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='Email' fullWidth
             name="email"
            onChange={inputHandler}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='Username' fullWidth
             name="username"
            onChange={inputHandler}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='Password' type='password' fullWidth
             name="password"
            onChange={inputHandler}/>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField variant='outlined' label='Confirm Password' type='password' fullWidth />
                  </Grid> */}
                  <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label='Address' multiline rows={2} fullWidth
             name="address"
            onChange={inputHandler}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
            <Button variant='contained' color='success' onClick={addHandler}>Sign Up</Button>
          </Grid>
          <Grid>
            <Typography><Link to={'/login'}>Back to login</Link></Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
