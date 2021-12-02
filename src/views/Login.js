import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Auth from "../views/Auth";
import LoggedLayout from '../views/LoggedLayout';

import theme from "../Components/ui/Theme";





const Login = () => {

    const [user, setUser] = useState(null);
    return (
        <ThemeProvider theme={theme} >
          
        { 
          !user 
            ? 
          <Auth user={user} setUser={setUser}  /> 
            :
          <LoggedLayout user={user} setUser={setUser} />
        }
        
      </ThemeProvider>
    )
}

export default Login;