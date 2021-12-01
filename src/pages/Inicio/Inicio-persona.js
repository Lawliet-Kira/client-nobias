import * as React from 'react'
import Topbar from '../../Components/NavBar/AppBar.js';
import FAB from "../../Components/Fab/fab.js";
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import MenuIcon from "../../logoNB.png";
import { Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import CustomizedInputBase from '../../Components/Input/input.js';
import { Link } from 'react-router-dom';

const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;


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
                            ienvenido/a
                            </Typography>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} sx={{mt:10}}>
                        <ThemeProvider theme={theme}>
                        <Stack
                         spacing={3} 
                         direction="column" 
                        //  justifyContent="center"
                         alignItems="center"
                         >  
                            <Link to="../Resultados?bias=unconscious&simulation1=60&simulation2=100&simulation3=20&simulation4=50&options=3;1;1;1">
                            <Button variant="contained" color="boton" size="large" >Iniciar Test</Button>
                            </Link>
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