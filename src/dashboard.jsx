// STEP 1 - Include Dependencies
// Include react
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import MSColumn2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import ButtonAppBar from "../src/Components/NavBar/AppBar";

import { borders } from '@mui/system';

import "./Dashboard.css";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, MSColumn2D, FusionTheme);

function App() {
  const [bias, SetBias] = useState(0);

  const TextSesgo = [
    "Clickear gráfico para más info\n",
    "Sesgo Maternal\n",
    "Sesgo Inconsciente\n",
    "Sesgo Atribución\n",
    "Sesgo Desempeño\n",
  ];
  const TextQueEs = [
    "",
    "Significado Maternal\n",
    "Significado Inconsciente\n",
    "Significado Atribución\n",
    "Significado Desempeño\n",
  ];
  const TextSesgoConsejo = [
    "",
    "Consejo de maternal\n",
    "Consejo Inconsciente",
    "Consejo Atribución",
    "Consejo Desempeño",
  ];

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
            label: "Sesgo Maternal",
          },
          {
            label: "Sesgo Inconsciente",
          },
          {
            label: "Sesgo Atribución",
          },
          {
            label: "Sesgo Desempeño",
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
            value: "10",
          },
          {
            value: "20",
          },
          {
            value: "30",
          },
          {
            value: "40",
          },
        ],
      },
      {
        seriesname: "Otras",
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
    },
    Description: {
      fontSize: 20,
    },
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
          item
          xs={5}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.Bias}>{TextSesgo[bias]}</Text>
          <Text style={styles.Description}>{TextQueEs[bias]}</Text>
          <Text style={styles.Description}>{TextSesgoConsejo[bias]}</Text>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
