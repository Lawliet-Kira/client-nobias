import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Auth from "../views/Auth";
import LoggedLayout from '../views/LoggedLayout';

import theme from "../Components/ui/Theme";

import Topbar from '../Components/NavBar/AppBar.js';
import FAB from "../Components/Fab/fab.js";


const Login = () => {

    const [user, setUser] = useState(null);
    return (
        <ThemeProvider theme={theme} >
          <Topbar />
        { 
          !user 
            ? 
          <Auth user={user} setUser={setUser}  /> 
            :
          <LoggedLayout user={user} setUser={setUser} />
        }
        <FAB text_bold="Inicia sesion, o registrate"/>
      </ThemeProvider>
    )
}

export default Login;