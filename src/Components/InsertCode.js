import React, { Fragment, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import axios from 'axios';

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
            margin: theme.spacing(4, 0, 3),
            alignSelf: 'flex-end'
        }
    });

});

const InsertCode = (props) => {

    const { setSelectedForm, setEmployee } = props;

    const [body, setBody] = useState({ code: "" });
    const [loading, setLoading] = useState(false);
    const [start, setStart] = useState(false);

    const classes = useStyles();

    const handleChange = e => {

        setBody({
            ...body,
            [e.target.name] : e.target.value
        })

    };
    
    const handleChatbot = async (e) => {
        
        setEmployee(body);
        setStart(true);
        
        // await axios.post('https://api-nobias.herokuapp.com/user', body).then((res) => {  
            
        //     setEmployee({ code: code.body });
        //     setStart(true);

        // }).catch(err => {
        //     console.log("Error user",err);
        // }).then(() => {
        //     setLoading(false);
        // });

    };

    const onSubmit = async () => {
        
        setLoading(true);

        await axios.post('https://api-nobias.herokuapp.com/code', body).then((res) => {  
            
            const { message } = res.data;

            if(message === "OK"){
                setStart(true);
            }
        
        }).catch(err => {
            console.log("Error code",err);
        }).then(() => {
            setLoading(false);
        });


    };

    return ( 

        <Fragment>

            { !start ?
                <>
                    <Button variant="outlined" className={classes.button} onClick={() => setSelectedForm(null)}> Return </Button>

                    <Typography component='h5' variant='h5'>
                        Insert <strong> code </strong> to begin
                    </Typography>

                    <form className={classes.form}>

                        <TextField 
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Code'
                            name='code'
                            value={body.code}
                            onChange={handleChange}
                        />
                        
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Click to Start
                        </Button>
                    </form>
                </>
                :
                (<Button primary onClick={handleChatbot}> Let's go to Chatbot </Button>)
            }

        </Fragment>

    );
}
 
export default InsertCode;