import React from 'react';

import { Grid, Button, Avatar, Stack, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { purple } from '@mui/material/colors';
import logoNB from '../assets/logoNB.png';

import "../Components/scss/AuthOptions.scss";

const useStyles = makeStyles( theme => ({
    authOptions: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 100
    },
    avatar: {
        margin: theme.spacing(4),
    },

}));

const ColorButton = styled(Button)(({theme}) => ({ 
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#7879F1",
    '&:hover': {
      backgroundColor: "#4646EC",
    },
}));

export default function AuthOptions( props ) {

    const { setSelectedForm } = props;

    const classes = useStyles();

    return (
        <div component='main' className={classes.authOptions}>

            <Avatar sx={{ width: 200, height: 200 }} 
                    src={logoNB} 
                    className={classes.avatar} 
                    variant='rounded'
                    alt='Logo No Bias'
            />
    
            <Stack direction="row" spacing={4}>
                <ColorButton variant="contained" className="login" onClick={ () => setSelectedForm('login')} >
                    Log-in
                </ColorButton>
                <ColorButton variant="contained" className='register' onClick={ () => setSelectedForm('register') } >
                    Register
                </ColorButton>   
            </Stack>
            
        </div>
    )

}