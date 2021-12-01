import React from 'react';

import { Grid, Button, Avatar, Stack, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { purple } from '@mui/material/colors';
import logoNB from '../assets/logoNB.png';

import "../components/scss/AuthOptions.scss";

const useStyles = makeStyles( theme => ({
    authOptions: {
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(4),
    },

}));

const ColorButton = styled(Button)(({theme}) => ({ 
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
}));

export default function AuthOptions( props ) {

    const { setSelectedForm } = props;

    const classes = useStyles();

    return (
        <div component='main' className={classes.authOptions} >

            <Avatar sx={{ width: 100, height: 100 }} 
                    src={logoNB} 
                    className={classes.avatar} 
                    variant='rounded'
                    alt='Logo No Bias'
            />
    
            <Stack direction="column" spacing={4}>
                <ColorButton variant="contained" className="login" onClick={ () => setSelectedForm('test_ent')} >
                    Start Test
                </ColorButton>
                <ColorButton variant="contained" className="login" onClick={ () => setSelectedForm('login')} >
                    Log-in
                </ColorButton>
                <ColorButton variant="contained" className="test" onClick={ () => setSelectedForm('test_free')}>
                    Try free test
                </ColorButton>
                <ColorButton variant="contained" className='register' onClick={ () => setSelectedForm('register') } >
                    Register
                </ColorButton>   
            </Stack>
            
        </div>
    )

}