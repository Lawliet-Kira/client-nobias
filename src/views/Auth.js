import React, { useState } from 'react';
import RegisterForm from '../Components/RegisterForm';
import LoginForm from '../Components/LoginForm';
import Test from "../Components/Test";
import AuthOptions from "../Components/AuthOptions";
import ChatbotNoBias from '../Components/ChatbotNoBias';
import InsertCode from '../Components/InsertCode';

import { Grid, Container, Paper, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import fondo from '../assets/purple.jpg';
import { LockOutlined } from '@mui/icons-material';

import LogoNoBias from "../assets/logoNB.png";
import "../views/scss/Auth.scss";

const useStyles = makeStyles( theme => ({
  
    root: {
        //backgroundImage: `url(${fondo})`,
        //backgroundRepeat: 'no-repeat',
        //backgroundSize: 'cover',
        //backgroundPosition: 'center',
        backgroundColor: '#A5A6F6',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        opacity: '0.8',
        height: '60%',
		[theme.breakpoints.down('md')]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		},
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DADCFB"
    },
    div: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    chatbot: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }

}));


const loginStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }


export default function Auth( props ) {

    const { user, setUser } = props;
    
    const [ selectedForm, setSelectedForm ] = useState(null);
    const [ employee, setEmployee ] = useState(null);
    
    const classes = useStyles();
    
    const handlerForm = () => {

        switch ( selectedForm ){

            case 'login' : 
                return <LoginForm setUser={setUser} setSelectedForm={setSelectedForm} />;
            case 'register' :
                return <RegisterForm setSelectedForm={setSelectedForm} />
            case 'test' :
                return  <Test setEmployee={setEmployee} setSelectedForm={setSelectedForm} />
            case 'test_ent' :
                return <InsertCode setEmployee={setEmployee} setSelectedForm={setSelectedForm} />
            default:
                return <AuthOptions setSelectedForm={setSelectedForm} />
                
        }
    
    };

    return (
        
        <Grid container component='main' className={classes.root}>
            <CssBaseline />

            { !employee ?
                <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} style={loginStyle} >
                    <div className={classes.div}>
                        { handlerForm() }
                    </div>
                </Container>
            :   
                <div className={classes.chatbot} >
                    <ChatbotNoBias  employee={employee} />
                </div>
            }

        </Grid>

    );


}