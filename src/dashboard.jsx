// STEP 1 - Include Dependencies
// Include react
import React, { useState } from "react";

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

import { Container, Box } from "@mui/material";

import ButtonAppBar from "../src/Components/NavBar/AppBar";

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
    " \n",
    "Significado Maternal\n",
    "Significado Inconsciente\n",
    "Significado Atribución\n",
    "Significado Desempeño\n",
  ];
  const TextSesgoConsejo = [
    " ",
    "Consejo de maternal\n",
    "Consejo Inconsciente",
    "Consejo Atribución",
    "Consejo Desempeño",
  ];

  // STEP 2 - Chart Data
  const dataSource = {
    chart: {
      caption: "Sesgos de género con mayor presencia",
      subcaption: "",
      xaxisname: "Sésgos",
      yaxisname: "Porcentaje",
      formatnumberscale: "1",
      plottooltext: "<b>$dataValue</b> de los trabajadores presentan $label",
      theme: "fusion",
      drawcrossline: "1",
      bgColor: "#f5f8fb",
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
        initiallyHidden: 1,
        data: [
          {
            value: "125000",
          },
          {
            value: "300000",
          },
          {
            value: "480000",
          },
          {
            value: "800000",
          },
          {
            value: "1100000",
          },
        ],
      },
      {
        seriesname: "Otras",
        data: [
          {
            value: "70000",
          },
          {
            value: "150000",
          },
          {
            value: "350000",
          },
          {
            value: "600000",
          },
          {
            value: "1400000",
          },
        ],
      },
    ],
  };

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "mscolumn2d", // The chart type
    width: "1000", // Width of the chart
    height: "600", // Height of the chart
    dataFormat: "JSON", // Data type
    dataSource: dataSource,
    events: {
      dataPlotClick: function(e) {
        SetBias(e.data.dataIndex);
      },
    },
  };

  const ResultGrid = styled(Grid)`
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: #a5a6f6;
  `;
  // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
  return (
    <>
      <ResultGrid container columnSpacing={3} rowSpacing={20}>
        {/* El spacing entre la barra y el resto esta hecho a la mala */}
        <Grid item xs={12}>
          <ButtonAppBar />
        </Grid>
        <Grid item xs={6}>
          <ReactFC {...chartConfigs} />
        </Grid>
        <Grid item xs={6}>
          {TextSesgo[bias]}
          {TextQueEs[bias]}
          {TextSesgoConsejo[bias]}
        </Grid>
      </ResultGrid>
    </>
  );
}

export default App;
