import React, { Fragment, useState } from 'react';

import axios from 'axios';

import {  Avatar, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import fondo from '../assets/purple.jpg';
import logoNB from '../assets/logoNB.png';
import { ConstructionOutlined, LockOutlined } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const useStyles = makeStyles(theme => {

    return({
        avatar: {
            margin: theme.spacing(1),
            height: '50px'
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        button: {
            margin: theme.spacing(3, 0, 2),
            alignSelf: 'flex-end'
        }
    });

});

const LoginForm = (props) => {

    const { setSelectedForm, setUser } = props;
    const [loading, setLoading] = useState(false);

    const [body, setBody] = useState({ email: '', password: '' });

    const handleChange = e => {
    
        setBody({
            ...body,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = async () => {

        await axios.post('https://api-nobias.herokuapp.com/login', body).then((res) => {  
            console.log(res);
            setUser(res.data);
        }).catch(err => {
            console.log("Error login",err);
        }).then(() => {
            setLoading(false);
        });

    }

    const classes = useStyles();

    return (
        <Fragment>

            <Button variant="outlined" className={classes.button} onClick={() => setSelectedForm(null)}> Return </Button>

            <Avatar sx={{ width: 100, height: 100 }} 
                    src={logoNB} 
                    className={classes.avatar} 
                    variant='rounded'
                    alt='Logo No Bias'
            />

            <Typography component='h1' variant='h5'>
                Sign In
            </Typography>

            <form className={classes.form}>
                <TextField 
                    fullWidth
                    autoFocus
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='E-mail'
                    name='email'
                    value={body.email}
                    onChange={handleChange}
                />
                <TextField 
                    fullWidth
                    type='password'
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='Password'
                    name='password'
                    value={body.password}
                    onChange={handleChange}
                />
                <Button 
                    fullWidth
                    loading
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    onClick={onSubmit}
                >
                    Sign In    
                </Button>    
            </form>
        </Fragment>
    );
}
 
export default LoginForm;