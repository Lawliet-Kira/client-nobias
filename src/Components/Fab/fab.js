import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Tooltip, Typography, tooltipClasses } from '@mui/material';
import { styled } from '@mui/system';

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

const HtmlTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}} />
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "fff",
        color: "0000",
        maxWidth: 220,
        fontSize: 16,
        border: '1px solid #dadde9',
    },
}));



const FAB = ({text_bold, text_normal}) => {

    const fabs = {
        color: 'inherit',
        sx: fabStyle,
        icon: <HelpOutlineOutlinedIcon/>,
        label: 'Ask',
    };


  return (
    <div>
        <Box sx={{ position: 'absolute', bottom:20, right: 20 }}>
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography color='inherit' fontSize={24}> Ayuda </Typography>
                        <><b>{text_bold}</b><br/>{text_normal}</>
                    </React.Fragment>
                }
            >
            <Fab sx = {fabs.sx} aria-label={fabs.label} color={fabs.color} >
                <Typography fontSize={24} >?</Typography>
            </Fab>
            </HtmlTooltip>
        </Box>
    </div>
  );
}

export default FAB;