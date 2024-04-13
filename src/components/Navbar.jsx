
import { Box,AppBar,Toolbar,Typography,Button  } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {


   const handleLogout = () => {
      sessionStorage.removeItem('userToken');
      window.location.href = '/login';
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Employee App
          </Typography>
                <Button color="inherit">
                    <Link to={"/"} style={{ textDecoration:"none",color:"white" }}> Home
                      </Link> &nbsp;&nbsp;&nbsp;
                      <Link to={"/dashboard"} style={{ textDecoration:"none",color:"white" }}> Employees
                    </Link> &nbsp;&nbsp;&nbsp;

                    <Link to={"/form"} style={{ textDecoration:"none",color:"white" }}> Add Employee
            </Link> &nbsp;&nbsp;&nbsp;
            
             
                </Button> <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
