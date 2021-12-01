import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const LoggedLayout = (props) => {

    return (  
       <Router>
        <Dashboard {...props} />
       </Router>
    );
}
 
export default LoggedLayout;