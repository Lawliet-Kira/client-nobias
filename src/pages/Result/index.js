import Biases from "./biases.js";
import FlipCard from "../../Components/FlipCard/FlipCard.js";
import ButtonAppBar from "../../Components/NavBar/AppBar.js";

import * as React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import {Typography, LinearProgress} from "@mui/material";
import {makeStyles} from "@mui/styles"
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

const Accordion = styled((props) => (
  <MuiAccordion elevation={2} {...props}/>
))(({ theme }) => ({
  borderRadius:5,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 15,
  },
  column: {
    flexBasis: '10%',
  },
  column2: {
    flexBasis: '80%',
    justifyContent:"",
    alignContent: "right",
  },
}))



export default function Result(bias, result1, result2, result3) {

  const classes = useStyles();

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
        <Item sx={{height:"70vh", p:"30px", borderRadius: 5, backgroundColor:"#fff"}}>
          <Typography sx={{ textAlign: 'left', fontSize: 32, mb:5}}>Resultados</Typography>
          <div className={classes.root}>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <div className={classes.column}>
                <Typography>Simulacion 1</Typography>
              </div>
              <div className={classes.column2} style={{margin:"10px"}}>
              <LinearProgress variant="determinate" value={result1}/>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
          <div className={classes.root}>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <div className={classes.column}>
                <Typography>Simulacion 2</Typography>
              </div>
              <div className={classes.column2} style={{margin:"10px"}}>
              <LinearProgress variant="determinate" value={result2}/>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
          <div className={classes.root}>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <div className={classes.column}>
                <Typography>Simulacion 3</Typography>
              </div>
              <div className={classes.column2} style={{margin:"10px"}}>
              <LinearProgress variant="determinate" value={result3}/>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
        </Item>
      </Grid>
    </ResultGrid>
    </>
  );
}


