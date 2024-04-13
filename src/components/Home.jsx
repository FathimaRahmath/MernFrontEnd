
import React from 'react';
import { Container } from '@mui/material';

import bg from '../components/bg.gif'
import Navbar from './Navbar';
const Home = () => {
    return (
  
    <Container >
      
        <div >
          <Navbar/>
          
      <img src={bg} alt="" style={{ float: 'left', marginLeft: '10px' }} />
              <br /><br /><br /> <br /><br />
              <div style={{ float: 'right', marginLeft: '20px' }}>
      <h1 style={{ color:'#00308F'}}>Employee Management Portal ...</h1>
      <p>Welcome to our employee app! This app helps manage employee informations.</p>
      <div>
        
        <p style={{ color:'blue'}}>Here's a sneak peek of our app:</p>
        <ul style={{ color:"#0039a6"}}>
          <li>View and update employee profiles</li>
          <li>Manage employee profiles</li>
          <li>Track attendance and time-off requests</li>
          <li>Generate reports and analytics</li>
        </ul>
      </div>
      </div>
    </div>
    </Container>
  );
};

export default Home;
