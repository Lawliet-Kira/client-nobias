import * as React from "react";

// MUI Components
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// Custom components
import ButtonAppBar from "../../Components/NavBar/AppBar.js";
//import ModalVid from '../../Components/Capsulas/modalvideo.js'
import { CustomPlaceholder } from 'react-placeholder-image';

// Images y Videos



const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export default function Capsulas() {


    return (
        <ResultGrid container columnSpacing = {3} rowSpacing={4}>
            <ButtonAppBar />
            {/* Primera Fila */}
            <Grid item xs = {12}> 
                <Typography sx={{fontSize : 32, color: "white"}}>
                    Aprende sobre otros sesgos
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Affinity Bias"
                />
                <Typography>
                    Affinity Bias
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Likeability Bias"
                />
                <Typography>
                    Likeability Bias
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Performance Bias"
                />
                <Typography>
                    Performance Bias
                </Typography>
            </Grid>
            {/* Segunda Fila */}
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Unconscious Bias"
                />
                <Typography>
                    Unconscious Bias
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Maternal Bias"
                />
                <Typography>
                    Maternal Bias
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <CustomPlaceholder
                width={400}
                height={300}
                backgroundColor="#7879F1"
                textColor="#ffffff"
                text="Attribution Bias"
                />
                <Typography>
                    Attribution Bias
                </Typography>
            </Grid>
        </ResultGrid>
    );
}