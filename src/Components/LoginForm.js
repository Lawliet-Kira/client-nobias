import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {  Avatar, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logoNB from '../assets/logoNB.png';
import ChargeBottom from './ChargeBottom';
import { styled } from '@mui/material/styles';

function defaultValueForm() {
    return {
      nickname: "",
      email: ""
    };
} 

const useStyles = makeStyles(theme => {

    return({
        avatar: {
            margin: theme.spacing(1),
            height: '100px'
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
            outlineColor: "#6B6BEF"
        },
        button: {
            margin: theme.spacing(3, 0, 2),
            alignSelf: 'flex-end',
            backgroundColor: "#6B6BEF",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#4747EB",
                color: "#fff",
            }
        }
    });

});

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: "#4747EB",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#4747EB",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#5A5AED",
      },
      '&:hover fieldset': {
        borderColor: '#1414B8',
      },
      '&.Mui-focused fieldset': {
        borderColor: "#4747EB",
      },
    },
});

const LoginForm = (props) => {

    const { setSelectedForm, setUser } = props;
    const [loading, setLoading] = useState(false);
    
    const [body, setBody] = useState(defaultValueForm);

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
            { !loading ? 
                <>
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
                        <CssTextField
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
                        <CssTextField
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
                </>
                :
                <ChargeBottom />
            }
        </Fragment>
    );
}
 
export default LoginForm;