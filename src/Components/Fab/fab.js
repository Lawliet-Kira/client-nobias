import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Typography } from '@mui/material';

const fabStyle ={
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: 'common.white',
    bgcolor: '#7879F1',
    '&:hover': {
        bgcolor: "#6B6BEF"
    }
};


export default function FAB() {

    const fabs = {
        color: 'inherit',
        sx: fabStyle,
        icon: <HelpOutlineOutlinedIcon/>,
        label: 'Ask',
    };


  return (
    <Box sx={{ position: 'absolute', bottom:20, right: 20 }}>
      <Fab sx = {fabs.sx} aria-label={fabs.label} color={fabs.color} >
        <Typography fontSize={24} >?</Typography>
      </Fab>
    </Box>
  );
}
