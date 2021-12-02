import Biases from "./biases.js";
import Explicaciones from "./explicaciones.js"
import FlipCard from "../../Components/FlipCard/FlipCard.js";
import ButtonAppBar from "../../Components/NavBar/AppBar.js";
import ProgressBar from "../../Components/Progress/progress.js";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



import FAB from "../../Components/Fab/fab.js"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  margin: 30,
  boxShadow: 3,
}));

const ResultGrid = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Accordion = styled((props) => <MuiAccordion elevation={2} {...props} />)(
  ({ theme }) => ({
    borderRadius: 5,
  })
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: 15,
  },
  column: {
    flexBasis: "10%",
  },
  column2: {
    flexBasis: "80%",
    justifyContent: "",
    alignContent: "right",
  },
}));

export default function Result( ) {
  const classes = useStyles();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const bias = urlParams.get("bias");
  const simulation1 = urlParams.get("simulation1");
  const simulation2 = urlParams.get("simulation2");
  const simulation3 = urlParams.get("simulation3");
  var simulation4 = "";
  const opciones = urlParams.get("options");

  var array_opciones = opciones.split(";");
  var texto_situacion_4 = "";
  var display_variable_4 = "none";
  var display_variable_3 = "";

  var suma = parseInt(simulation1) + parseInt(simulation2) + parseInt(simulation3)
  var cant_simulaciones = 3

  var texto_situacion_1 = ""
  var texto_situacion_1_2 = ""

  var texto_situacion_2 = ""
  var texto_situacion_2_2 = ""

  var texto_situacion_3 = ""


  if (bias === "unconscious") {
      texto_situacion_1 = Explicaciones[bias]["situacion_1"][array_opciones[0]];
      texto_situacion_2 = Explicaciones[bias]["situacion_2"][array_opciones[1]];
      texto_situacion_3 = Explicaciones[bias]["situacion_3"][array_opciones[2]];
      display_variable_4 = "block";
      simulation4 = urlParams.get("simulation4");
      texto_situacion_4 = Explicaciones[bias]["situacion_4"][array_opciones[3]];
      suma += parseInt(simulation4)
      cant_simulaciones += 1
  } else if (bias === "attribution") {
    if (array_opciones[0] !== "1") {
      const texto = Explicaciones[bias]["situacion_1"][array_opciones[0]].split('#');
      texto_situacion_1 = texto[0]
      texto_situacion_1_2 = texto[1]
    } else {
      texto_situacion_1 = Explicaciones[bias]["situacion_1"][array_opciones[0]];
    }

    if (array_opciones[1] !== "1") {
      const texto2 = Explicaciones[bias]["situacion_1"][array_opciones[0]].split('#');
      texto_situacion_2 = texto2[0]
      texto_situacion_2_2 = texto2[1]
    } else{
      texto_situacion_2 = Explicaciones[bias]["situacion_2"][array_opciones[1]];
    }
    texto_situacion_3 = Explicaciones[bias]["situacion_3"][array_opciones[2]];

  } else{
    texto_situacion_1 = Explicaciones[bias]["situacion_1"][array_opciones[0]];
    texto_situacion_2 = Explicaciones[bias]["situacion_2"][array_opciones[1]];
    texto_situacion_3 = Explicaciones[bias]["situacion_3"][array_opciones[2]];
  }
  
  
  const promedio = Math.round(suma/cant_simulaciones )

  const [expanded, setExpanded] = React.useState('panel1')
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel: false);
  }

  const textStyle = {
    fontSize: 16,
  }

  return (
    <>
      <ResultGrid container columnSpacing={3}>
        <ButtonAppBar />
        <Grid item xs={4}>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <FlipCard card={Biases[bias]} promedio={promedio}></FlipCard>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item
            sx={{
              height: "70vh",
              p: "30px",
              borderRadius: 5,
              backgroundColor: "#fff",
            }}
          >
            <Typography sx={{ textAlign: "left", fontSize: 32, mb: 5, fontWeight: 600}}>
              Resultados
            </Typography>
            <div className={classes.root}id="situacion_1">
              <Accordion expanded={expanded === 'panel1'} onChange= {handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={classes.column}>
                    <Typography>Simulacion 1</Typography>
                  </div>
                  <div className={classes.column2} style={{ margin: "0px 10px"}}>
                    <ProgressBar result={simulation1} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{textStyle}} align='justify'>
                    {texto_situacion_1}{<br/>}{<br/>}{texto_situacion_1_2} 
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={classes.root}id="situacion_2">
              <Accordion expanded={expanded === 'panel2'} onChange= {handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <div className={classes.column}>
                    <Typography>Simulacion 2</Typography>
                  </div>
                  <div className={classes.column2} style={{ margin: "0px 10px" }}>
                    <ProgressBar result={simulation2} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{textStyle}} align='justify'>
                    {texto_situacion_2}{<br/>}{<br/>}{texto_situacion_2_2} 
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={classes.root}id="situacion_3" style = {{display: `${display_variable_3}`}}>
              <Accordion expanded={expanded === 'panel3'} onChange= {handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <div className={classes.column}>
                    <Typography>Simulacion 3</Typography>
                  </div>
                  <div className={classes.column2} style={{ margin: "0px 10px" }}>
                    <ProgressBar result={simulation3} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{textStyle}} align='justify'>
                  {texto_situacion_3}{<br/>}{<br/>}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={classes.root} id="situacion_4" style ={{display: `${display_variable_4}`}}>
              <Accordion expanded={expanded === 'panel4'} onChange= {handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <div className={classes.column}>
                    <Typography>Simulacion 4</Typography>
                  </div>
                  <div className={classes.column2} style={{ margin: "0px 10px" }}>
                    <ProgressBar result={simulation4} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{textStyle}} align='justify'>
                    {texto_situacion_4}{<br/>}{<br/>}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            
          </Item>
          
        </Grid>
        <FAB text_bold="Revisaste tus resultados?" text_normal="Prueba con hacer clic en el logo de No Bias para navegar al inicio de la aplicacion."/>
      </ResultGrid>
    </>
  );
}
