import React from "react";
import {AppBar,Box,Toolbar,Typography,Button} from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import style from "../Utils/style";
{
  /* That navbar by using material ui*/
}
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={style.backgroundOfNavbar}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={style.colorLogoNavBar}>
            LOGO
          </Typography>
          {
  /* That is user name button*/
}
          <Button
            variant="outlined"
            color="inherit"
            style={style.colorButtonNavbar}
          >
            <Person2OutlinedIcon sx={{ marginRight: "0.5rem" }} />{" "}
            username@resoluteai.in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
