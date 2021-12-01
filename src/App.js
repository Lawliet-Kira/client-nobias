import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/400.css';

import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from "./views/Auth";
import LoggedLayout from './views/LoggedLayout';
import theme from "./components/ui/Theme";

//SACAR
import Dashboard from './components/Dashboard';

function App() {

  const [user, setUser] = useState(null);

  return (
      
      <ThemeProvider theme={theme} >
        { 
          !user 
            ? 
          <Auth user={user} setUser={setUser} /> 
            :
          <LoggedLayout user={user} setUser={setUser} />
        }
      </ThemeProvider>
      
  );

}

export default App;
