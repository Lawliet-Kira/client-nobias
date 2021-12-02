import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ChargeBottom = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress 
            size={100}   
            sx={{
                color: (theme) =>
                "#A5A6F6",
            }}
            />
        </Box>    
    );
}
 
export default ChargeBottom;