import React, { Fragment, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import ChargeBottom from './ChargeBottom';
import { validateEmail } from '../Utils/Validations';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles( theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),

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
}));

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

const CssOutLined = styled(OutlinedInput)({
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

function defaultValueForm() {
    return {
      nickname: "",
      password: "",
      repassword: "",
      email: "",
    };
} 

const RegisterForm = (props) => {

    const { setSelectedForm } = props;
    const [ loading, setLoading ] = useState(false); 
    const [ formError, setFormError ] = useState({});
    const [ showPassword, setShowPassword ] = useState(false);

    const [ body, setBody ] = useState(defaultValueForm);

    const classes = useStyles();

    const returnPage = () => {
        setBody(defaultValueForm);
        setSelectedForm(null);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = e => {

        setBody({
            ...body,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = async () => {    

        setFormError({});
        let errors = {};
        let formOk = true;

        // Validación de mail
        if(!validateEmail(body.email)){
            errors.email = true;
            formOk = false;
        }

        // Validación de password
        if ( body.password.length < 6 ){
            errors.password = true;
            formOk = false;
        }

        if ( body.repassword === body.password ){
            errors.repassword = true;
            formOk = false;
        }

        // Validación de usuario
        if ( !body.nickname ) {
            errors.nickname = true;
            formOk = false;
        }
        
        setFormError(errors);
        
        if ( formOk ){

            setLoading(true);

            await axios.post('https://api-nobias.herokuapp.com/register', body).then((res) => {  
                console.log(res);
            }).catch(err => {
                console.log(err);
            }).then(() => {
                setLoading(false);
                setSelectedForm(null);
            });

        } else {
            console.log("Formulario no Valido");
        }


    }

    return (
        <Fragment>
            
            { !loading ?
            <> 
                <Button className={classes.button} variant="contained" onClick={() => setSelectedForm(null)}> Return </Button>

                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                
                <form className={classes.form}>  
                   
                    <CssTextField
                        fullWidth
                        error={formError.nickname}
                        autoFocus
                        color='primary'
                        margin='normal'
                        variant='outlined'
                        label='NickName'
                        name='nickname'
                        helperText={ formError.nickname && "Please enter a nickname" }
                        value={body.nickname}
                        onChange={handleChange}
                    />


                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <CssOutLined
                            id="outlined-adornment-password"
                            fullWidth
                            error={ formError.password }
                            type={ showPassword ? 'text' : 'password' }
                            color='primary'
                            margin='normal'
                            name='password'
                            helperText={ formError.password && "Please enter a valid password" }
                            value={body.password}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <CssTextField
                        fullWidth
                        error={ formError.repassword }
                        type='password'
                        color='primary'
                        margin='normal'
                        variant='outlined'
                        label='Re-password'
                        name='repassword'
                        helperText={ formError.repassword && "Passwords are not equals" }
                        value={body.repassword}
                        onChange={handleChange}
                    />

                    <CssTextField
                        error={ formError.email } 
                        fullWidth
                        type='email'
                        color='primary'
                        margin='normal'
                        variant='outlined'
                        label='E-mail'
                        name='email'
                        helperText={ formError.email && "Please enter a valid email" }
                        value={body.email}
                        onChange={handleChange}
                    />

                    <Button 
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        onClick={onSubmit}
                    > 
                        Sign Up 
                    </Button>

                </form>
            </>
            : 
            <ChargeBottom />
        }
        </Fragment>
    );
}
 
export default RegisterForm;