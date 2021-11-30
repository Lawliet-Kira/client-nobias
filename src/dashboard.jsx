// STEP 1 - Include Dependencies
// Include react
import React, { useState, useEffect } from "react";
import { Text, StyleSheet} from "react-native";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts librarys
import FusionCharts from "fusioncharts";

// Include the chart type
import MSColumn2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";

import ButtonAppBar from "../src/Components/NavBar/AppBar";

import { borders } from '@mui/system';

import axios from 'axios';

import "./Dashboard.css";
import { copyDone } from "pg-protocol/dist/messages";



// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, MSColumn2D, FusionTheme);

function App() {

  document.title = "Dashboard"

  const [body, setbody] = useState({ code: "RR3F3MC2" });

  const [data, setdata] = useState([]);

  useEffect(async function(){

    await axios.post('https://api-nobias.herokuapp.com/dashboard', body).then((res) => {  
        console.log(res.data)
        let tipos = [0,0,0,0]
        let total = 0
        for(let i = 0; i < res.data.length ; i++){
            tipos[res.data[i].type-1] += 1
            total += 1
        }
        tipos[0] = Math.round(tipos[0]*100/total)
        tipos[1] = Math.round(tipos[1]*100/total)
        tipos[2] = Math.round(tipos[2]*100/total)
        tipos[3] = Math.round(tipos[3]*100/total)
        console.log("tipos",tipos)
        setdata(tipos)
        console.log("data:", data)
        
    }).catch(err => {
        console.log("Error dashboard",err);
    }).then(() => {
        
    });


  }, []);

  var sesgos = require("./sesgos.json");

  console.log(sesgos);
  console.log(data)

  const [bias, SetBias] = useState(0);

  // STEP 2 - Chart Data
  const dataSource = {
    chart: {
      caption: "Presencia de sesgos de género",
      subcaption: "",
      xaxisname: "Sésgos",
      yaxisname: "Porcentaje de trabajadores",
      formatnumberscale: "1",
      plottooltext: "<b>$dataValue</b> de los trabajadores presentan $label",
      theme: "fusion",
      drawcrossline: "1",
      paletteColors: "7879F1, FF959A",
      bgColor: "#FFFFFF",
      numberSuffix: "%"
    },
    categories: [
      {
        category: [
          {
            label: "Sesgo Desempeño",
          },
          {
            label: "Sesgo Atribucion",
          },
          {
            label: "Sesgo Incosciente",
          },
          {
            label: "Sesgo Maternal",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Tu empresa",
        initiallyHidden: 0,
        data: [
          {
            value: data[0],
          },
          {
            value: data[1],
          },
          {
            value: data[2],
          },
          {
            value: data[3],
          },
        ],
      },
      {
        seriesname: "Otras Empresas",
        initiallyHidden: 1,
        data: [
          {
            value: "40",
          },
          {
            value: "30",
          },
          {
            value: "20",
          },
          {
            value: "10",
          },
        ],
      },
    ],
  };

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "mscolumn2d", // The chart type
    width: "90%", // Width of the chart
    height: "50%", // Height of the chart
    dataFormat: "JSON", // Data type
    dataSource: dataSource,
    events: {
      dataPlotClick: function(e) {
        SetBias(e.data.dataIndex);
      },
    },
  };


  const styles = StyleSheet.create({
    Bias: {
      fontSize: 30,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      marginTop: 10,
    },
    Subtitle: {
      fontSize: 25,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
    },
    Description: {
      fontSize: 20,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
      justify: "center",
    },
    CodeEnt: {
      fontSize: 25,
      width: "100%",
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
    }
  });
  // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
  return (
    <div style={{ backgroundColor: "#a5a6f6", height: "100vh" }}>
      <div style={{ height: "30vh" }}></div>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* El spacing entre la barra y el resto esta hecho a la mala */}
        <Grid item xs={12}>
          <ButtonAppBar position="fixed" />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} sx={{ borderRadius: 5 }} style={{background: "#ffffff"}} alignItems="center" justifyContent="center">
          <ReactFC {...chartConfigs} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid
          container justify = "center"
          xs={3}
          style={{
            justify: "center",
            alignItems: "center",
            background: "#ffffff",
            borderRadius: 10
          }}
        >
          <Text style={styles.Bias}>{sesgos[bias].nombre + "\n"}</Text>
          <Text style={styles.Description}>
          <Text>{sesgos[bias].definicion + "\n"}</Text>
          </Text>
          <Text style={styles.Subtitle}>{"\nComo evitarlo\n"}</Text>
          <Text style={styles.Description}>{sesgos[bias].consejos + "\n\n"}</Text>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container justify = "center" xs={7}>
        <Text style={styles.CodeEnt}>
        <Text>{"Tu código de empresa es "}</Text>
        <Text style={{fontWeight:"bold"}}>{`${body.code}`}</Text>
        </Text>
      </Grid>
    </div>
  );
}

export default App;
