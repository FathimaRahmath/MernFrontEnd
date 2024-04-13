import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Container, Button, TextField } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
    
  }
  const addHandler = () => {
    console.log(user)
    axios.post("http://localhost:3005/api/login", user)
      .then((res) => {
        console.log(res)
        alert(res.data.message)
        //auth
        console.log(res.data.token);
        sessionStorage.setItem('userToken', res.data.token);
        
        navigate('/blogs')
        
       })
      .catch((err) => {
        console.log(err);
    })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="sm" style={{ backgroundColor: '#C8E6C9', border: 'solid 3px pink', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h5'> LOGIN FORM</Typography>
        <TextField variant='outlined' label='UserName'
          name="username"
            onChange={inputHandler} style={{ margin: '10px 0' }} />
        <TextField variant='outlined' label='Password' name="password"
            onChange={inputHandler}style={{ margin: '10px 0' }} />
        <Button variant='contained' color='success' style={{ margin: '10px 0' }} onClick={addHandler}>Submit</Button>
        <Typography><Link to={'/sign'}>New user</Link></Typography>
      </Container>
    </div>
  );
}

export default Login;