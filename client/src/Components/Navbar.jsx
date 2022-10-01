import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
const background = {
  backgroundColor: 'white',
  boxShadow: 'none',
  fontSize: '700px'
}
const colorOfLogo = {
  color: 'rgba(88, 74, 74, 0.74)',
  flexGrow: 1,
  fontWeight: '700'
}
const colorOfButton = {
  color: 'black',
  textTransform: 'none'
}
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={background}>
        <Toolbar>

          <Typography variant="h5" component="div" sx={colorOfLogo}>
            LOGO
          </Typography>

          <Button variant="outlined" color="inherit" style={colorOfButton}>

            <Person2OutlinedIcon sx={{ marginRight: '0.5rem' }} />  username@resoluteai.in

          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
