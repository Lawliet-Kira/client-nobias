import React, { Fragment, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles( theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        alignSelf: 'flex-end'
    }
}));

const RegisterForm = (props) => {

    const { setSelectedForm } = props;
    const [ loading, setLoading ] = useState(false); 

    const [ body, setBody ] = useState({ 
                                    nickname: '',  
                                    password: '',
                                    repassword: '',
                                    email: ''
                            });

    const classes = useStyles();

    const handleChange = e => {

        setBody({
            ...body,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = async () => {    

        setLoading(true);

        await axios.post('https://api-nobias.herokuapp.com/register', body).then((res) => {  
            console.log(res);
        }).catch(err => {
            console.log(err);
        }).then(() => {
            setLoading(false);
            setSelectedForm(null);
        });

    }

    return (
        <Fragment>

            <Button className={classes.button} variant="outlined" onClick={() => setSelectedForm(null)}> Return </Button>

            <Typography component='h1' variant='h5'>
                Sign Up
            </Typography>
            
            <form className={classes.form}>  

                <TextField 
                    fullWidth
                    autoFocus
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='NickName'
                    name='nickname'
                    value={body.nickname}
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

                <TextField 
                    fullWidth
                    type='password'
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='Re-password'
                    name='repassword'
                    value={body.repassword}
                    onChange={handleChange}
                />

                <TextField 
                    fullWidth
                    type='email'
                    color='primary'
                    margin='normal'
                    variant='outlined'
                    label='E-mail'
                    name='email'
                    value={body.email}
                    onChange={handleChange}
                />

                <Button 
                    fullWidth
                    loading={loading.toString()}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    onClick={onSubmit}
                > 
                    Sign Up 
                </Button>

            </form>

        </Fragment>
    );
}
 
export default RegisterForm;