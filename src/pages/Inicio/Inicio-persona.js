import * as React from 'react'
import Box from '@mui/material/Box';
import Topbar from '../../Components/NavBar/AppBar.js';
import FAB from "../../Components/Fab/fab.js";
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import MenuIcon from "../../logoNB.png";
import { Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { TextField, InputBase } from '@mui/material';

import CustomizedInputBase from '../../Components/Input/input.js';

const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const CodigoField = styled(Paper) (({theme}) => ({
    backgroundColor: '#7879F1',
    width:500,
    p: '2px 4px',
    borderRadius: 10,
    elevation:4,
}));

const theme = createTheme({
    palette: {
        boton: {
            main: "#7879F1",
            contrastText: "#fff",
        },
        white:{
            main: "#fff",
            contrastText: "#fff"
        }
    },
});

function InicioPersona () {

    return(
        <div className="">    
            <Topbar/>
            <ResultGrid container direction="row">
                <Grid item xs={3}></Grid>
                <Grid item xs={6} rowSpacing={2} alignItems="center" sx={{minWidth:600}}>
                    <Grid container alignItems= "center">
                        <Grid item xs={6}>
                            <img src={MenuIcon} alt="Logo Nobias" width={250}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h2" color="white">
                            ienvenido/as
                            </Typography>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} alignItems="center" justifyContent="center" sx={{mt:10}}>
                        <ThemeProvider theme={theme}>
                        <Stack
                         spacing={5} 
                         direction="column" 
                         justifyContent="center"
                         alignItems="center"
                         >
                            <Button variant="contained" color="boton" size="large">Iniciar Test</Button>
                            <CustomizedInputBase/>
                            

                        </Stack>
                        </ThemeProvider>

                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </ResultGrid>
            <FAB text_normal="Por favor introduce el codigo entregado por tu empleador. Si no tienes uno, presiona en Iniciar Test" />
        </div>
    )
}

export default InicioPersona;