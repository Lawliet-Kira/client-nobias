import * as React from "react";

// MUI Components
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom components
import ButtonAppBar from "../../Components/NavBar/AppBar.js";
import FAB from "../../Components/Fab/fab.js"

import MiniAttribution from '../../assets/Capsulas/Img/MiniaturaAttribution.jpg';
import MiniMaternal from "../../assets/Capsulas/Img/MiniaturaMaternal.jpg";
import MiniPerformance from "../../assets/Capsulas/Img/MiniaturaPerformance.jpg";
import MiniUnconscious from "../../assets/Capsulas/Img/MiniaturaUnconscious.jpg";


import VideoModal from "../../Components/Capsulas/modalvideo";


const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const color = "#35366E"


export default function Capsulas() {


    return (
            <ResultGrid container columnSpacing = {3} rowSpacing={6} align="center">
                <ButtonAppBar />
                {/* Primera Fila */}
                <Grid item xs = {12}> 
                    <Typography sx={{fontSize : 32, color: "white"}}>
                        Aprende sobre otros sesgos
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <VideoModal bias="Affinity" foto={MiniPerformance} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}>
                        Affinity Bias
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <VideoModal bias="Likeability" foto={MiniPerformance} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}>
                        Likeability Bias
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <VideoModal bias="Performance" foto={MiniPerformance} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}>
                        Performance Bias
                    </Typography>
                </Grid>
                {/* Segunda Fila */}
                <Grid item xs={4}>
                    <VideoModal bias="Unconscious" foto={MiniUnconscious} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}>
                        Unconscious Bias
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <VideoModal bias="Maternal" foto={MiniMaternal} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}>
                        Maternal Bias
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <VideoModal bias="Attribution" foto={MiniAttribution} explicacion="asdfhjkasjkhdf" video="2g811Eo7K8U"/>
                    <Typography fontSize={24} fontWeight={700} color={color}> 
                        Attribution Bias
                    </Typography>
                </Grid>
                <FAB text_bold={"Ya viste todas las capsulas?"} text_normal={"Prueba con hacer clic en el logo de No Bias para navegar al inicio de la aplicacion."}/>
            </ResultGrid>

    );
}