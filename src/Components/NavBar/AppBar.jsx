import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../../../src/assets/logoNB.png";
import "./style.scss";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupsIcon from '@mui/icons-material/Groups';



export default function ButtonAppBar() {

  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
      return
    }
    setState({ ...state, [anchor]: open});
  };

  const list = (anchor) => (
    <Box 
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx = {{bgcolor: '#7879F1', height:'100%'}}
      >
        <List>
          <ListItem button key={'Inicio'} sx={{pt: 3, pb:3, color:'white'}}>
            <ListItemIcon>
              <HomeIcon sx={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary={'Inicio'}/>
          </ListItem>
          <ListItem button key={'Aprende otros sesgos'} sx={{pt: 3, pb:3, color:'white'}}>
            <ListItemIcon>
              <LocalLibraryIcon sx={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary={'Aprende otros sesgos'} />
          </ListItem>
          <ListItem button key={'Conoce Nobias'}  sx={{pt: 3, pb:3, color:'white'}}>
            <ListItemIcon>
              <GroupsIcon sx={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary={'Conoce Nobias'}/>
          </ListItem>
        </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#7879F1", width: "100vw" }}>
        <Toolbar>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick= {toggleDrawer (anchor, true)}
              >
                <img src={MenuIcon} alt="MenuIcon" className="logo" />
              </IconButton>
              <Drawer 
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                elevation={2}
              >
              {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            No Bias
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
