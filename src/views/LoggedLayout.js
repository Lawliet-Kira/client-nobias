import React, { useState } from 'react';

import Dashboard from '../Components/Dashboard';


const LoggedLayout = (props) => {

    return (  
        <Dashboard {...props} />
    );
}
 
export default LoggedLayout;