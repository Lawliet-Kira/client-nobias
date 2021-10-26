import Biases from "./biases.js";
import FlipCard from "../../Components/FlipCard/FlipCard.js";
import ButtonAppBar from "../../Components/NavBar/AppBar.js";


import * as React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import { Typography } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: 30,
  boxShadow:3,
}));

const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content:space-around;
  align-items: center;
`;


export default function Result(bias, result1, result2, result3) {

  bias = "maternal";

  result1 =  10
  result2 =  50
  result3 =  80


  return (
    <>
    
    <ResultGrid container columnSpacing={3}>
    <ButtonAppBar/>
      <Grid item xs={4}>
        <Item style={{background: 'transparent', boxShadow:'none'}}>
        <FlipCard card={Biases[bias]}></FlipCard>
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item sx={{height:"70vh", p:"30px", borderRadius: 5}}>
          <Typography sx={{ textAlign: 'left', fontSize: 32}}>Resultados</Typography>

        </Item>
      </Grid>
    </ResultGrid>
    </>
  );
}


