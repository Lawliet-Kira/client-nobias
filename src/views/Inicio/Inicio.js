import * as React from 'react'
import Topbar from '../../Components/NavBar/AppBar.js';
import FAB from "../../Components/Fab/fab.js";
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import MenuIcon from "../../logoNB.png";
import { Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    },
});

function Inicio () {

    return(
        <div className="">    
            <Topbar tipo="inicios"/>
            <ResultGrid container direction="row" alignItems="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={6} rowSpacing={2} alignItems="center" sx={{minWidth:600}}>
                    <Grid container alignItems= "center">
                        <Grid item xs={5}>
                            <img src={MenuIcon} alt="Logo Nobias" width={250}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h2" color="white">
                            ienvenido/a
                            </Typography>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} alignItems="center" justifyContent="center" sx={{mt:10}}>
                        <ThemeProvider theme={theme}>
                        <Stack
                         spacing={10} 
                         direction="row" 
                         justifyContent="center"
                         alignItems="center"
                         >  
                            <Link to="Persona">
                            <Button variant="contained" color="boton" size="large">Soy Persona</Button>
                            </Link>
                            <Link to="Empresa">
                            <Button variant="contained" color="boton" size="large">Soy Empresa</Button>
                            </Link>
                        </Stack>
                        </ThemeProvider>

                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </ResultGrid>
            <FAB text_bold="Por favor, selecciona tu tipo de usuario" />
        </div>
    )
}

export default Inicio;